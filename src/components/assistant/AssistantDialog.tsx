import { useState, useRef, useEffect } from 'react';
import { getInitialMessages, getInitialSuggestions, getResponse, getSuggestions } from './assistantLogic';
import { motion } from 'framer-motion';

interface AssistantDialogProps {
    onClose: () => void;
}

interface Message {
    text: string;
    isUser: boolean;
    isTyping?: boolean;
}

export const AssistantDialog = ({ onClose }: AssistantDialogProps) => {
    const [messages, setMessages] = useState<Message[]>(
        getInitialMessages().map(text => ({ text, isUser: false }))
    );
    const [input, setInput] = useState('');
    const [isAssistantTyping, setIsAssistantTyping] = useState(false);
    const [suggestions, setSuggestions] = useState<string[]>(getInitialSuggestions());

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) {
            e.preventDefault();
        }

        if (!input.trim() || isAssistantTyping) return;

        const userMessage = input.trim();
        setInput('');
        setMessages(prev => [...prev, { text: userMessage, isUser: true }]);

        setIsAssistantTyping(true);
        scrollToBottom();

        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await getResponse(userMessage);
        setMessages(prev => [...prev.filter(msg => !msg.isTyping), { text: response.text, isUser: false }]);
        setIsAssistantTyping(false);

        const newSuggestions = await getSuggestions(userMessage);
        setSuggestions(newSuggestions);
    };

    const handleSuggestionClick = async (suggestion: string) => {
        if (isAssistantTyping) return;

        setMessages(prev => [...prev, { text: suggestion, isUser: true }]);
        setIsAssistantTyping(true);
        scrollToBottom();

        await new Promise(resolve => setTimeout(resolve, 1500));

        const response = await getResponse(suggestion);
        setMessages(prev => [...prev.filter(msg => !msg.isTyping), {
            text: response.text,
            isUser: false
        }]);
        setIsAssistantTyping(false);

        const newSuggestions = await getSuggestions(suggestion);
        setSuggestions(newSuggestions);
    };

    return (
        <motion.div
            initial={{
                y: window.innerWidth >= 1024 ? 20 : '100%',
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1
            }}
            exit={{
                y: window.innerWidth >= 1024 ? 20 : '100%',
                opacity: 0
            }}
            transition={{
                type: "spring",
                damping: 25,
                stiffness: 300
            }}
            className="fixed lg:bottom-24 lg:right-8 lg:w-[450px] lg:h-[600px] bottom-0 right-0 w-full h-[100dvh] bg-white rounded-lg shadow-xl flex flex-col z-50"
        >
            <div className="px-4 py-3 border-b flex justify-between items-center bg-black text-white lg:rounded-t-lg">
                <h3 className="font-medium text-base">Mamostong Assistant</h3>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-300"
                >
                    ✕
                </button>
            </div>

            <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
                style={{
                    height: 'calc(100% - 140px)',
                    maxHeight: 'calc(100vh - 200px)'
                }}
            >
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-lg ${msg.isUser ? 'bg-black text-white' : 'bg-gray-100'
                            }`}>
                            {msg.text.split('\n').map((line, i) => (
                                <div
                                    key={i}
                                    dangerouslySetInnerHTML={{ __html: line }}
                                />
                            ))}
                        </div>
                    </div>
                ))}
                {isAssistantTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-100 p-3 rounded-lg flex items-center space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-2 border-t bg-white">
                <div className="flex flex-wrap gap-2 mb-2 max-h-24 overflow-y-auto">
                    {suggestions.map((suggestion, idx) => (
                        <button
                            key={idx}
                            onClick={() => handleSuggestionClick(suggestion)}
                            disabled={isAssistantTyping}
                            className={`text-sm bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors
                                ${isAssistantTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {suggestion}
                        </button>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                        disabled={isAssistantTyping}
                        className={`flex-1 p-2 border rounded
                            ${isAssistantTyping ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                    <button
                        type="submit"
                        disabled={isAssistantTyping || !input.trim()}
                        className={`bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors whitespace-nowrap
                            ${(isAssistantTyping || !input.trim()) ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        Send
                    </button>
                </form>
            </div>
        </motion.div>
    );
};