// Always required: 10
// Possibly required, and is QoL: 8-9
// Possibly required, but not much help: 6-7
// Not required but good QoL: 4-5
// Not required but helps sometimes: 2-3
// Not required and is trash: 1

const smz3Items = [
    {
        name: "[ Metroid Items ]",
        amount: 0,
        rating: 0
    },
    {
        name: "Missile",
        amount: 40,
        rating: 2
    },
    {
        name: "Super Missile",
        amount: 16,
        rating: 3
    },
    {
        name: "Power Bomb",
        amount: 10,
        rating: 3
    },
    {
        name: "Energy Tank",
        amount: 14,
        rating: 3
    },
    {
        name: "Reserve Tank",
        amount: 4,
        rating: 2
    },
    {
        name: "Plasma Beam",
        amount: 1,
        rating: 5
    },
    {
        name: "Ice Beam",
        amount: 1,
        rating: 4
    },
    {
        name: "Spazer",
        amount: 1,
        rating: 3
    },
    {
        name: "Wave Beam",
        amount: 1,
        rating: 4
    },
    {
        name: "Space Jump",
        amount: 1,
        rating: 8
    },
    {
        name: "Hi-Jump Boots",
        amount: 1,
        rating: 8
    },
    {
        name: "X-Ray Scope",
        amount: 1,
        rating: 2
    },
    {
        name: "Speed Booster",
        amount: 1,
        rating: 8
    },
    {
        name: "Screw Attack",
        amount: 1,
        rating: 5
    },
    {
        name: "Grappling Beam",
        amount: 1,
        rating: 6
    },
    {
        name: "Spring Ball",
        amount: 1,
        rating: 5
    },
    {
        name: "Morph Bombs",
        amount: 1,
        rating: 8
    },
    {
        name: "Morphing Ball",
        amount: 1,
        rating: 10
    },
    {
        name: "Varia Suit",
        amount: 1,
        rating: 9
    },
    {
        name: "Gravity Suit",
        amount: 1,
        rating: 9
    },
    {
        name: "Charge Beam",
        amount: 1,
        rating: 9
    },
    {
        name: "[ Zelda Items ]",
        amount: 0,
        rating: 0
    },
    {
        name: "Piece Of Heart",
        amount: 24,
        rating: 2
    },
    {
        name: "Heart Container",
        amount: 10,
        rating: 3
    },
    {
        name: "One Rupee",
        amount: 2,
        rating: 1
    },
    {
        name: "Five Rupees",
        amount: 4,
        rating: 1
    },
    {
        name: "Twenty Rupees",
        amount: 28,
        rating: 1
    },
    {
        name: "Fifty Rupees",
        amount: 7,
        rating: 2
    },
    {
        name: "One Hundred Rupees",
        amount: 1,
        rating: 2
    },
    {
        name: "Three Hundred Rupees",
        amount: 5,
        rating: 3
    },
    {
        name: "Bomb Upgrade (+5)",
        amount: 6,
        rating: 1
    },
    {
        name: "Arrow Upgrade (+5)",
        amount: 6,
        rating: 1
    },
    {
        name: "Bomb Upgrade (+10)",
        amount: 1,
        rating: 1
    },
    {
        name: "Arrow Upgrade (+10)",
        amount: 1,
        rating: 1
    },
    {
        name: "Single Arrow",
        amount: 1,
        rating: 1
    },
    {
        name: "Ten Arrows",
        amount: 5,
        rating: 1
    },
    {
        name: "Three Bombs",
        amount: 9,
        rating: 1
    },
    {
        name: "Ten Bombs",
        amount: 1,
        rating: 1
    },
    {
        name: "Shovel",
        amount: 1,
        rating: 6
    },
    {
        name: "Mushroom",
        amount: 1,
        rating: 6
    },
    {
        name: "Magic Powder",
        amount: 1,
        rating: 6
    },
    {
        name: "Bottle (1st)",
        amount: 1,
        rating: 6
    },
    {
        name: "Bottle (2-5th)",
        amount: 4,
        rating: 3
    },
    {
        name: "Quake",
        amount: 1,
        rating: 6
    },
    {
        name: "Bombos",
        amount: 1,
        rating: 6
    },
    {
        name: "Ether",
        amount: 1,
        rating: 6
    },
    {
        name: "Silver Arrows",
        amount: 1,
        rating: 5
    },
    {
        name: "Blue Boomerang",
        amount: 1,
        rating: 2
    },
    {
        name: "Half Magic",
        amount: 1,
        rating: 5
    },
    {
        name: "Progressive Shield",
        amount: 3,
        rating: 2
    },
    {
        name: "Magical Boomerang",
        amount: 1,
        rating: 2
    },
    {
        name: "Progressive Armor",
        amount: 2,
        rating: 5
    },
    {
        name: "Cane Of Byrna",
        amount: 1,
        rating: 3
    },
    {
        name: "Bug Catching Net",
        amount: 1,
        rating: 2
    },
    {
        name: "Flute",
        amount: 1,
        rating: 8
    },
    {
        name: "Book Of Mudora",
        amount: 1,
        rating: 6
    },
    {
        name: "Pegasus Boots",
        amount: 1,
        rating: 8
    },
    {
        name: "Magic Cape",
        amount: 1,
        rating: 6
    },
    {
        name: "Flippers",
        amount: 1,
        rating: 7
    },
    {
        name: "Ice Rod",
        amount: 1,
        rating: 6
    },
    {
        name: "Progressive Glove",
        amount: 2,
        rating: 10
    },
    {
        name: "Sword (Fighter)",
        amount: 1,
        rating: 10
    },
    {
        name: "Sword (Master)",
        amount: 1,
        rating: 10
    },
    {
        name: "Sword (Tempered)",
        amount: 1,
        rating: 5
    },
    {
        name: "Sword (Butter)",
        amount: 1,
        rating: 4
    },
    {
        name: "Fire Rod",
        amount: 1,
        rating: 8
    },
    {
        name: "Magic Mirror",
        amount: 1,
        rating: 9
    },
    {
        name: "Hookshot",
        amount: 1,
        rating: 9
    },
    {
        name: "Lamp",
        amount: 1,
        rating: 8
    },
    {
        name: "Cane Of Somaria",
        amount: 1,
        rating: 10
    },
    {
        name: "Bow",
        amount: 1,
        rating: 9
    },
    {
        name: "Hammer",
        amount: 1,
        rating: 10
    }
]