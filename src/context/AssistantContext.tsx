'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AssistantContextType {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  selectedVideo: string | null;
  setSelectedVideo: (value: string | null) => void;
  selectedTwo: string | null;
  setSelectedTwo: (value: string | null) => void;
}

const AssistantContext = createContext<AssistantContextType | undefined>(undefined);

export const AssistantProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [selectedTwo, setSelectedTwo] = useState<string | null>(null);

  return (
    <AssistantContext.Provider value={{ isOpen, setIsOpen, selectedVideo,
        setSelectedVideo, selectedTwo, setSelectedTwo  }}>
      {children}
    </AssistantContext.Provider>
  );
};

export const useAssistant = () => {
  const context = useContext(AssistantContext);
  if (context === undefined) {
    throw new Error('useAssistant must be used within an AssistantProvider');
  }
  return context;
}; 

