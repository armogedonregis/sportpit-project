'use client'

import { useEffect, useState } from 'react';
import quizSteps from '@/data/quiz-steps.json';
import { Product } from '@/types/product';
import { getAllProducts } from '@/utils/productData';
import { useCartDispatch, useCartState } from '@/context/cartContext';
import Link from 'next/link';

export const QuizModule = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [recommendedProducts, setRecommendedProducts] = useState<Product[]>([]);
  const { items } = useCartState();
  const dispatch = useCartDispatch();

  const isInCart = (product: Product) => {
    return items.some(item => item.id === product.id);
  };

  const addToCart = (product: Product) => {
    const price = parseFloat(product.price.replace(/[^\d.-]/g, ''));
    const productWithNumericPrice = { ...product, price: price.toString() };
    dispatch({ type: 'ADD_ITEM', payload: productWithNumericPrice });
  };

  const addAllToCart = () => {
    recommendedProducts.forEach(product => {
      addToCart(product);
    });
  };

  const restartQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setRecommendedProducts([]);
  };

  const step = quizSteps[currentStep];


  useEffect(() => {
    if (currentStep === quizSteps.length - 1) {
      const allProducts = getAllProducts();
      const randomProducts = allProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRecommendedProducts(randomProducts);
    }
  }, [currentStep]);

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
    <div className="bg-[#7C8B7C] py-8 px-4 sm:px-6 lg:px-8 lg:pt-24">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 animate-fadeIn">
          <h2 className="text-2xl font-bold text-white mb-2">{step.title}</h2>
          {step.description && (
            <p className="text-gray-100">{step.description}</p>
          )}
        </div>

        {currentStep === quizSteps.length - 1 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {recommendedProducts.map(product => (
              <div key={product.id} className="p-4 border rounded-lg bg-white flex flex-col justify-between">
                <Link
                  href={`/product/${product.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow cursor-pointer"
                >
                  <div>
                    <img src={product.img} alt={product.name} className="w-full h-40 object-cover mb-2" />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p className="text-sm mb-2">{product.price}</p>
                  </div>
                </Link>
                <button
                  onClick={() => addToCart(product)}
                  disabled={isInCart(product)}
                  className="w-full px-4 py-2 bg-black text-white rounded-md text-sm hover:bg-black/80 transition-colors"
                >
                  {isInCart(product) ? 'In Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className={`grid ${getGridCols(step.options?.length || 0)} gap-4 animate-slideIn`}>
            {step.options?.map((option) => (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={`
                  flex flex-col items-center p-4 rounded-lg border-2 transition-all
                  ${isOptionSelected(option.id)
                    ? 'border-black bg-black/20'
                    : 'border-gray-200 hover:border-black/50 bg-white'}
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
        )}

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
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-black transition-all duration-500"
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
              className="px-4 py-2 bg-black border border-transparent rounded-md text-sm font-medium text-white disabled:opacity-50"
            >
              Next
            </button>
          </div>

          {currentStep === quizSteps.length - 1 && (
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={addAllToCart}
                className="px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-black/80 transition-colors"
              >
                Add All to Cart
              </button>
              <button
                onClick={restartQuiz}
                className="px-6 py-3 border border-white text-white rounded-md font-medium hover:bg-white/10 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 