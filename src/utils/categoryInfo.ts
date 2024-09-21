export function getCategoryInfo(category?: string) {
    const categories = {
        'solids': { title: 'Solids', description: 'Mamostong Solid has the look and feel of an energy bar, but it’s not your run-of-the-mill bar. A fast and light carbohydrate-rich, low fiber fuel source.' },
        'gels': { title: 'Gels', description: 'Mamostong energy Gels are an easy-grab, portable source of endurance fuel with carbohydrate encapsulated in Hydrogel Technology.' },
        'drink-mixes': { title: 'Drink Mixes', description: 'Mamostong Drink Mixes are high-carbohydrate energy drinks for endurance sports that dissolve in water and convert to hydrogel in the acidity of the stomach.' },
        'bundles': { title: 'Bundles', description: 'More than just a nutrition bundle — these are Mamostong Collections. Curated selections of high-carbohydrate energy products for endurance sports training and racing.' },
        'bicarb-system': { title: 'Bicarb', description: 'The Mamostong Bicarb System is an advanced sports fuel that harnesses the power of bicarbonate in combination with Hydrogel Technology, to help athletes push the boundaries of effort during high-intensity exercise.' },
        'essentials': { title: 'Essentials', description: 'Mamostong 500ml and 750ml water bottles for cycling, triathlon, running and trail running.' },

    };
    return categories[category as keyof typeof categories] || { title: 'Shop Sports Fuel', description: 'Shop the full range of Sports Fuels — Mamostong energy Gels, energy Drink Mixes and Solid energy bar, plus training Collections and essential accessories.' };
}