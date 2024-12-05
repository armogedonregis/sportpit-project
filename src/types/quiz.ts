export interface QuizStep {
    title: string;
    description?: string;
    type: 'multiple-choice' | 'text-input' | 'single-choice';
    options?: {
      id: string;
      title: string;
      imageUrl?: string;
    }[];
  }