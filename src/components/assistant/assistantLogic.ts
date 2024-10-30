import { getAllProducts } from "@/utils/productData";

const products = getAllProducts();

const initialMessages = [
    'Hi! I\'m Mamostong Assistant. How can I help you today?',
    'You can ask me about:\n• Products and sizes\n• Shipping and delivery\n• Payment methods\n• Returns and exchanges\n• Or visit our <a href="/products" class="text-blue-500 hover:underline">shop page</a> to see all products'
];

const initialSuggestions = [
    'Show me your shop catalog',
    'Tell me about performance suits',
    'What breathable t-shirts do you have?',
    'Show gym wear options'
];

const productCategories = {
    'solids': 'Solid supplements and nutritional products',
    'gels': 'Gel-based supplements and products',
    'bicarb-system': 'Bicarbonate system products',
    'essentials': 'Essential supplements and clothing',
    'bundles': 'Product bundles and sets',
    'drink-mixes': 'Drink mix supplements'
};

const responses: Record<string, string> = {
    'hello': 'Hi! How can I help you today?',
    'shipping': 'We offer worldwide shipping. Standard delivery takes 3-5 business days.',
    'payment': 'We accept Visa, Mastercard, and PayPal payments.',
    'return': 'You can return any unused items within 14 days of delivery.',
    'size': 'Our clothing sizes range from XS to XXL. Would you like to see our size guide?',
    'spray': 'Our Dream Spray (€29.99) is a convenient 25ml spray with premium ingredients.',
    'protein': 'Our Plants Power Protein (€32.99) comes in a box of 12 servings, perfect for your daily protein needs.',
    'vegan': 'We offer Vegan D3 (€27.99) in 60 capsules, supporting your plant-based lifestyle.',
    'performance': 'Our Performance Blend Sachet (€3.99) is perfect for pre-workout energy.',
    'suit': 'We have several suits:\n- 7516M Performance Suit (€159.99)\n- 7516M Tight Gym Suit (€139.99)',
    't-shirt': 'Our 7516M Breathable T-Shirt (€59.99) is perfect for workouts.',
    'sweatshirt': 'The 7516M Zip Sweatshirt (€79.99) combines style and functionality.',
    'shop': 'You can view our full catalog at <a href="/products" class="text-blue-500 hover:underline">our shop page</a>. Would you like to see specific products or categories?',
    'catalog': 'Check out our complete product range at <a href="/products" class="text-blue-500 hover:underline">our shop page</a>. Or I can help you find specific items.',
    'store': 'Visit <a href="/products" class="text-blue-500 hover:underline">our shop page</a> to browse all products. What type of products are you interested in?',
    'default': 'I can help you with our products, supplements, clothing, shipping, or payment options. What would you like to know?',
};

export const getResponse = async (message: string): Promise<{ text: string; showResetOption: boolean }> => {
    const lowercaseMessage = message.toLowerCase();


    if (lowercaseMessage.includes('start over') ||
        lowercaseMessage.includes('reset') ||
        lowercaseMessage.includes('back to start')) {
        return {
            text: initialMessages.join('\n\n'),
            showResetOption: false
        };
    }

    // Поиск по категориям
    for (const [category, description] of Object.entries(productCategories)) {
        if (lowercaseMessage.includes(category)) {
            const categoryProducts = products.filter(p => p.category === category);
            const productList = categoryProducts
                .map(p => `${p.name} - ${p.price}${p.servings ? `\nServings: ${p.servings}` : ''}`)
                .join('\n\n');
            return {
                text: `${description}:\n\n${productList}\n\nCan't find what you're looking for? Type "start over" to see all options.`,
                showResetOption: true
            };
        }
    }

    // Поиск по ключевым словам
    for (const [key, response] of Object.entries(responses)) {
        if (lowercaseMessage.includes(key)) {
            return {
                text: `${response}\n\nNeed something else? Type "start over" to see all options.`,
                showResetOption: true
            };
        }
    }

    return {
        text: `${responses.default}\n\nOr type "start over" to see initial options.`,
        showResetOption: true
    };
};

export const getSuggestions = async (message: string): Promise<string[]> => {
    const lowercaseMessage = message.toLowerCase();

    const resetOption = 'Start over';


    if (lowercaseMessage.includes('start over') ||
        lowercaseMessage.includes('reset') ||
        lowercaseMessage.includes('back to start')) {
        return initialSuggestions;
    }

    // Suggestions для одежды
    if (lowercaseMessage.includes('cloth') || lowercaseMessage.includes('wear')) {
        return [
            'Tell me about performance suits',
            'Show me gym wear',
            'What sizes are available?',
            resetOption
        ];
    }

    // Suggestions для добавок
    if (lowercaseMessage.includes('supplement') || lowercaseMessage.includes('protein')) {
        return [
            'Tell me about Plants Power Protein',
            'Show me vegan supplements',
            'What are drink mixes?',
            resetOption
        ];
    }

    // Suggestions для спреев и гелей
    if (lowercaseMessage.includes('spray') || lowercaseMessage.includes('gel')) {
        return [
            'Tell me about Dream Spray',
            'Show me gel products',
            'What are the servings?',
            resetOption
        ];
    }

    // Suggestions для наборов
    if (lowercaseMessage.includes('bundle') || lowercaseMessage.includes('set')) {
        return [
            'Show available bundles',
            'What\'s included in sets?',
            'Are bundles cheaper?',
            resetOption
        ];
    }

    if (lowercaseMessage.includes('shop') || 
        lowercaseMessage.includes('catalog') || 
        lowercaseMessage.includes('store') ||
        lowercaseMessage.includes('products')) {
        return [
            'Show me supplements',
            'Tell me about clothing',
            'Visit shop page',
            resetOption
        ];
    }

    // Suggestions по умолчанию
    return [
        'Show me supplements',
        'Tell me about clothing',
        'What bundles do you have?',
        resetOption
    ];
};

export const getInitialMessages = () => initialMessages;
export const getInitialSuggestions = () => initialSuggestions;