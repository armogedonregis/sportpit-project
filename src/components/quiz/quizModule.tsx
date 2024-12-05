'use client'

import { useState } from 'react';
import quizSteps from '@/data/quiz-steps.json';

export const QuizModule = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});

  const step = quizSteps[currentStep];

  const handleOptionClick = (optionId: string) => {
    setAnswers(prev => {
      const newAnswers = { ...prev };

      if (step.type === 'single-choice') {
        newAnswers[step.title] = [optionId];
      } else {
        const currentAnswers = prev[step.title] || [];
        if (currentAnswers.includes(optionId)) {
          newAnswers[step.title] = currentAnswers.filter(id => id !== optionId);
        } else {
          newAnswers[step.title] = [...currentAnswers, optionId];
        }
      }

      return newAnswers;
    });
  };

  const isOptionSelected = (optionId: string) => {
    const currentAnswers = answers[step.title] || [];
    return currentAnswers.includes(optionId);
  };

  const progress = ((currentStep) / (quizSteps.length - 1)) * 100;

  const getGridCols = (optionsLength: number) => {
    switch (optionsLength) {
      case 2:
        return 'grid-cols-1 sm:grid-cols-2';
      case 3:
        return 'grid-cols-1 sm:grid-cols-3';
      case 4:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
      case 5:
        return 'grid-cols-1 sm:grid-cols-3 md:grid-cols-5';
      case 6:
        return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-4';
      default:
        return 'grid-cols-1 sm:grid-cols-3 md:grid-cols-5';
    }
  };

  return (
    <div className="min-h-screen bg-[#7C8B7C] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
          {step.description && (
            <p className="text-gray-100">{step.description}</p>
          )}
        </div>

        <div className={`grid ${getGridCols(step.options?.length || 0)} gap-4 animate-slideIn`}>
          {step.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionClick(option.id)}
              className={`
                flex flex-col items-center p-4 rounded-lg border-2 transition-all
                ${isOptionSelected(option.id)
                  ? 'border-yellow-400 bg-yellow-50'
                  : 'border-gray-200 hover:border-yellow-200 bg-white'}
              `}
            >
              <div
                className="w-[30px] h-[30px] mb-4 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${option.imageUrl})` }}
              />
              <span className="text-center text-sm font-medium text-gray-900">
                {option.title}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block text-white">
                  {Math.round(progress)}% complete
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${progress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-400 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-white bg-transparent disabled:opacity-50"
            >
              Back
            </button>
            <button
              onClick={() => setCurrentStep(prev => Math.min(quizSteps.length - 1, prev + 1))}
              disabled={currentStep === quizSteps.length - 1 || !answers[step.title]?.length}
              className="px-4 py-2 bg-yellow-400 border border-transparent rounded-md text-sm font-medium text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 