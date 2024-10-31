export function getCategoryInfo(category?: string) {
    const categories = {
        'ground': { title: 'Ground', description: 'Mamostong Solid has the look and feel of an energy bar, but it’s not your run-of-the-mill bar. A fast and light carbohydrate-rich, low fiber fuel source.' },
        'core': { title: 'Core', description: 'Mamostong energy Gels are an easy-grab, portable source of endurance fuel with carbohydrate encapsulated in Hydrogel Technology.' },
        'rise': { title: 'Rise', description: 'Mamostong Drink Mixes are high-carbohydrate energy drinks for endurance sports that dissolve in water and convert to hydrogel in the acidity of the stomach.' },
        'summit': { title: 'Summit', description: 'More than just a nutrition bundle — these are Mamostong Collections. Curated selections of high-carbohydrate energy products for endurance sports training and racing.' },
        '7516M': { title: '7516M', description: 'Mamostong 500ml and 750ml water bottles for cycling, triathlon, running and trail running.' },

    };
    return categories[category as keyof typeof categories] || { title: 'Shop Sports Fuel', description: 'Shop the full range of Sports Fuels — Mamostong energy Gels, energy Drink Mixes and Solid energy bar, plus training Collections and essential accessories.' };
}