import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import axios from 'axios';

interface QuizStep {
  title: string;
  description?: string;
  type: 'multiple-choice' | 'text-input' | 'single-choice';
  options?: {
    id: string;
    title: string;
    imageUrl?: string;
  }[];
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
  const response = await axios({
    url,
    responseType: 'arraybuffer'
  });
  
  await sharp(response.data)
    .grayscale() // Делаем черно-белым
    .resize(100, 100, { // Устанавливаем фиксированный размер
      fit: 'contain', // Сохраняем пропорции
      background: { r: 255, g: 255, b: 255, alpha: 0 } // Прозрачный фон
    })
    .toFile(outputPath);
}

async function processQuizImages() {
  // Создаем директорию для иконок, если её нет
  const iconsDir = path.join(process.cwd(), 'public', 'quiz_icons');
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Читаем JSON файл
  const quizData: QuizStep[] = JSON.parse(
    fs.readFileSync('quiz-steps.json', 'utf-8')
  );

  // Обрабатываем каждый шаг
  for (const step of quizData) {
    if (step.options) {
      for (const option of step.options) {
        if (option.imageUrl) {
          try {
            // Создаем имя файла из ID опции
            const fileName = `${option.id}.webp`;
            const outputPath = path.join(iconsDir, fileName);
            
            // Скачиваем и обрабатываем изображение
            await downloadImage(option.imageUrl, outputPath);
            
            // Обновляем путь в JSON
            option.imageUrl = `/quiz_icons/${fileName}`;
            
            console.log(`Обработано изображение: ${fileName}`);
          } catch (error) {
            console.error(`Ошибка при обработке изображения для ${option.id}:`, error);
          }
        }
      }
    }
  }

  // Сохраняем обновленный JSON
  fs.writeFileSync(
    'quiz-steps.json',
    JSON.stringify(quizData, null, 2)
  );

  console.log('Обработка изображений завершена');
}

processQuizImages().catch(console.error); 