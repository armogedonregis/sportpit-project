import puppeteer from 'puppeteer';
import fs from 'fs';

interface QuizOption {
  id: string;
  title: string;
  imageUrl: string;
}

interface QuizStep {
  title: string;
  description: string;
  type: 'single-choice' | 'multiple-choice' | 'text-input';
  options: QuizOption[];
}

async function scrapeQuizSteps() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://admin.revenuehunt.com/public/quiz/17HXoQw');
  
  const steps: QuizStep[] = [];
  let isLastStep = false;
  
  try {
    while (!isLastStep) {
      await page.waitForSelector('.lq-slide-title', { timeout: 5000 });

      const stepData = await page.evaluate(() => {
        const step: QuizStep = {
          title: document.querySelector('.lq-slide-title')?.textContent?.trim() || '',
          description: document.querySelector('.lq-slide-description')?.textContent?.trim() || '',
          type: 'single-choice',
          options: []
        };

        // Проверяем тип выбора
        const isMultipleChoice = document.querySelector('.lq-multi-select');
        const isTextInput = document.querySelector('input[type="text"]');
        
        if (isMultipleChoice) {
          step.type = 'multiple-choice';
        } else if (isTextInput) {
          step.type = 'text-input';
        }

        // Собираем варианты ответов
        const choices = document.querySelectorAll('.lq-choice');
        step.options = Array.from(choices).map(choice => ({
          id: choice.id,
          title: choice.querySelector('div:not(.lq-img):not(.lq-letter)')?.textContent?.trim() || '',
          imageUrl: choice.querySelector('.lq-img')?.getAttribute('style')?.match(/url\("(.+)"\)/)?.[1] || ''
        }));

        return step;
      });

      steps.push(stepData);
      console.log('Собран шаг:', stepData.title);

      // Кликаем по второму варианту ответа, если это не текстовое поле
      if (stepData.type !== 'text-input') {
        await page.click('.lq-choice:nth-child(2)');
      } else {
        await page.type('input[type="text"]', 'test');
      }

      // Ждем активации кнопки Next
      await page.waitForSelector('#nav-next:not([disabled])', { timeout: 5000 });
      
      // Проверяем, не последний ли это шаг
      isLastStep = await page.evaluate(() => {
        const nextButton = document.querySelector('#nav-next');
        const resultsBox = document.querySelector('.lq-results-box');
        return !!resultsBox || !nextButton;
      });

      if (!isLastStep) {
        await page.click('#nav-next');
        // Ждем загрузки следующего шага
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
  } catch (error) {
    console.error('Ошибка при сборе данных:', error);
  } finally {
    console.log(`Собрано шагов: ${steps.length}`);
    
    fs.writeFileSync(
      'quiz-steps.json',
      JSON.stringify(steps, null, 2)
    );

    await browser.close();
  }
}

scrapeQuizSteps().catch(console.error);