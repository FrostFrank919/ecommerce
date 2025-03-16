import { Product } from "../types/product";


export const products: Product[] = [
{
        id: "1",
        name: "1 Mukhi Rudraksha",
        description: "A single-mouthed Rudraksha bead, symbolizing the power of Lord Shiva.",
        price: 100,
        image: "/images/1-mukhi.png",
        category: "Single Beads",
        mukhi: 1,
        benefits: [
            "Represents Lord Shiva in his absolute form",
            "Helps in achieving oneness with the divine",
            "Provides protection from negative energies",
            "Enhances spiritual growth and enlightenment"
        ],            
        rating: 5.0,
        reviews: 12,
        stock: 2,
        featured: true
},
{
    id: "2",
    name: "5 Mukhi Rudraksha",
    description: "The 5 Mukhi Rudraksha represents Lord Shiva in his Kalyansundaram form. It is the most common and widely used Rudraksha. This bead is associated with the planet Jupiter and helps in improving health, relieving stress, and enhancing concentration.",
    price: 199.99,
    images: [
      "/images/5-mukhi.png",
    ],
    category: "Single Beads",
    mukhi: 5,
    benefits: [
      "Represents Lord Shiva as Kalyansundaram",
      "Associated with the planet Jupiter",
      "Improves health and relieves stress",
      "Enhances concentration and focus"
    ],
    rating: 4.8,
    reviews: 156,
    stock: 50,
    featured: true
  },
  {
    id: "3",
    name: "Panchmukhi Rudraksha Mala",
    description: "A beautiful mala made of 108 five-faced (Panchmukhi) Rudraksha beads. This mala is perfect for meditation and spiritual practices. The 5 Mukhi Rudraksha is associated with Lord Shiva and helps in improving health, relieving stress, and enhancing concentration.",
    price: 499.99,
    salePrice: 449.99,
    images: [
      "/images/5mukhimala.png",
      
    ],
    category: "Malas",
    mukhi: 5,
    benefits: [
      "Perfect for meditation and spiritual practices",
      "Improves health and relieves stress",
      "Enhances concentration and focus",
      "Provides protection from negative energies"
    ],
    rating: 4.9,
    reviews: 87,
    stock: 25,
    featured: true,
    new: true
  },
  {
    id: "4",
    name: "Rudraksha Bracelet",
    description: "A beautiful bracelet made of authentic Rudraksha beads with silver spacers. This bracelet is perfect for daily wear and provides the benefits of Rudraksha while being a stylish accessory.",
    price: 129.99,
    images: [
      "/images/RudrakshaBracelet.png",
    ],
    category: "Accessories",
    benefits: [
      "Perfect for daily wear",
      "Provides the benefits of Rudraksha",
      "Stylish accessory",
      "Helps in balancing energy"
    ],
    rating: 4.7,
    reviews: 64,
    stock: 100,
    featured: true
  },
  {
    id: "5",
    name: "8 Mukhi Rudraksha",
    description: "The 8 Mukhi Rudraksha represents Lord Ganesha, the remover of obstacles. This bead is associated with success, prosperity, and the removal of obstacles in life. It helps in achieving success in business and career.",
    price: 399.99,
    images: [
      "/images/8Mukhi.png",
    ],
    category: "Single Beads",
    mukhi: 8,
    benefits: [
      "Represents Lord Ganesha",
      "Helps in removing obstacles",
      "Brings success and prosperity",
      "Enhances business and career growth"
    ],
    rating: 4.6,
    reviews: 42,
    stock: 15,
    new: true
  },
  {
    id: "6",
    name: "Combination Rudraksha Pendant",
    description: "A beautiful pendant featuring a combination of different Mukhi Rudraksha beads set in silver. This pendant provides the benefits of multiple Rudraksha beads and is perfect for daily wear.",
    price: 299.99,
    salePrice: 249.99,
    images: [
      "/images/combinationmala.png",
    ],
    category: "Accessories",
    benefits: [
      "Combines benefits of multiple Rudraksha beads",
      "Perfect for daily wear",
      "Provides protection and spiritual growth",
      "Enhances overall well-being"
    ],
    rating: 4.8,
    reviews: 36,
    stock: 20
  },
  {
    id: "7",
    name: "14 Mukhi Rudraksha",
    description: "The 14 Mukhi Rudraksha represents Lord Hanuman and is known for its ability to provide strength, courage, and protection. This bead helps in overcoming fears and provides protection from negative energies.",
    price: 899.99,
    images: [
      "/images/14Mukhi.png",
    ],
    category: "Single Beads",
    mukhi: 14,
    benefits: [
      "Represents Lord Hanuman",
      "Provides strength and courage",
      "Helps in overcoming fears",
      "Provides protection from negative energies"
    ],
    rating: 4.9,
    reviews: 28,
    stock: 5
  },
  {
    id: "8",
    name: "Rudraksha and Crystal Mala",
    description: "A beautiful mala made of Rudraksha beads and healing crystals. This mala combines the spiritual benefits of Rudraksha with the healing properties of crystals, making it perfect for meditation and spiritual practices.",
    price: 599.99,
    images: [
      "/images/MixRudrakshaCrystal.jpg",
    ],
    category: "Malas",
    benefits: [
      "Combines spiritual benefits of Rudraksha with healing properties of crystals",
      "Perfect for meditation and spiritual practices",
      "Enhances energy flow and chakra balancing",
      "Provides protection and spiritual growth"
    ],
    rating: 4.7,
    reviews: 52,
    stock: 15,
    new: true
  },
  {
    id: "9",  
    name: "Damaru",
    description: `Mahadev's Damaru is a divine instrument symbolizing sound, language, music, and vibrations. Its two triangles represent Purusha and Prakriti, whose union leads to creation, movement, speech, and sound, while their separation brings stillness.
    Shiva's dance with the damaru led to the universe's creation. 
    It is believed to have produced the first sound, "nada," from the void. The damaru is linked to Nataraja's dance 
    and is said to have inspired Lord Ganesha to create music and the Vedas.
    Symbolizing Jiva, the damaru moves by Shiva's will. Its triangles signify mind and body, 
    while its chord represents the cycle of birth and death.`,
    price: 599.99,
    images: [
      "/images/DAmaruleft.png",
      "/images/Damaruright.png",
      "/images/blackdamaru.png",
    ],
    category: "Damaru",
    benefits: [
      "Enhances Concentration – Its rhythmic beats help focus the mind and aid in meditation.",
      "Symbol of Creation – Represents the origin of sound, language, and cosmic vibrations.",
      "Balances Energy – The two triangles symbolize harmony between masculine (Purusha) and feminine (Prakriti) energies.",
      "Aids in Spiritual Awakening – The sound resonates with higher consciousness, promoting inner peace.",
      "Represents the Cycle of Life – The damaru's chord signifies the cycle of birth and death."
    ],
    rating: 4.7,
    reviews: 52,
    stock: 15,
    new: true
  },
  {
    id: "10",
    name: "Shankha(Conch Shell)",
    description: `The Shankha (conch shell) is a sacred symbol in Hinduism, Buddhism, and Jainism. It represents purity, auspiciousness, and the cosmic sound "Om". Blowing the shankha is believed to remove negative energies and invite divine blessings.

    In Hindu mythology, Lord Vishnu holds a shankha, named Panchajanya, symbolizing victory and protection. It is also associated with Goddess Lakshmi, representing prosperity. Warriors in ancient times used it as a war trumpet.
    
    The shankha's spiral form signifies the universe's continuous expansion. It is used in rituals, meditation, and Ayurveda, where shankha water is believed to have healing properties.`,
    price: 599.99,
    images: [
      "/images/Sankha.png"
    ],
    category: "Shankha",
    benefits: [
      "Removes Negative Energy – Blowing the shankha purifies the surroundings and wards off negativity",
      "Enhances Mental Clarity – The sound vibrations improve focus and concentration",
      "Spiritual Upliftment – Associated with divine energy, it deepens meditation and devotion",
      "Symbol of Prosperity – Linked to Goddess Lakshmi, it attracts wealth and blessings",
      "Strengthens Lungs – Blowing the conch improves respiratory function",
      "Balances Vastu Energy – Placing a shankha in the home enhances positive vibrations"
    ],
    rating: 4.5,
    reviews: 52,
    stock: 15,
    new: true
  },
  {
    id: "11",
    name: "Puja Thali Set",
    description: " A Puja Thali Set is a sacred platter used in Hindu rituals, holding essential items like a diya, incense, kumkum, rice, and flowers. It symbolizes devotion, purity, and completeness in worship. The set enhances spiritual practices, making offerings to deities more organized and meaningful.",
    price: 599.99,
    images: [
      "/images/PujaThali.png",
    ],
    category: "Thali Set",
    benefits: [
      "Enhances Devot0n – Organizes essential items for structured worship",
      "Promotes Positivity – Ensures a clean and sacred ritual space",
      "Symbol of Auspiciousness – Represents purity and completeness in prayers"
    ],
    rating: 4.7,
    reviews: 52,
    stock: 15,
    new: true
  },
  {
    id: "12",
    name: "Rudraksha and Crystal Mala",
    description: "A beautiful mala made of Rudraksha beads and healing crystals. This mala combines the spiritual benefits of Rudraksha with the healing properties of crystals, making it perfect for meditation and spiritual practices.",
    price: 599.99,
    images: [
      "/images/MixRudrakshaCrystal.jpg",
    ],
    category: "Malas",
    benefits: [
      "Combines spiritual benefits of Rudraksha with healing properties of crystals",
      "Perfect for meditation and spiritual practices",
      "Enhances energy flow and chakra balancing",
      "Provides protection and spiritual growth"
    ],
    rating: 4.7,
    reviews: 52,
    stock: 15,
    new: true
  },
  {
    id: "13",
    name: "Rudraksha and Crystal Mala",
    description: "A beautiful mala made of Rudraksha beads and healing crystals. This mala combines the spiritual benefits of Rudraksha with the healing properties of crystals, making it perfect for meditation and spiritual practices.",
    price: 599.99,
    images: [
      "/images/MixRudrakshaCrystal.jpg",
    ],
    category: "Malas",
    benefits: [
      "Combines spiritual benefits of Rudraksha with healing properties of crystals",
      "Perfect for meditation and spiritual practices",
      "Enhances energy flow and chakra balancing",
      "Provides protection and spiritual growth"
    ],
    rating: 4.7,
    reviews: 52,
    stock: 15,
    new: true
  }
  
];

export default products;