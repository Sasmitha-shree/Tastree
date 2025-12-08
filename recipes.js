const recipes = [
  {
    "id": "r1",
    "title": "Masala Veg Pulao",
    "cuisine": "Indian",
    "diet": "Vegetarian",
    "cookTime": 30,
    "difficulty": "Easy",
    "image": "https://mariasmenu.com/wp-content/uploads/Masala-Pulao.jpg",
    "ingredients": [
      "Basmati rice - 1 cup",
      "Mixed vegetables - 1 cup (carrot, beans, peas)",
      "Onion - 1, sliced",
      "Garam masala - 1 tsp",
      "Salt to taste",
      "Oil - 2 tbsp"
    ],
    "steps": [
      "Wash the basmati rice thoroughly and soak it in water for 15 minutes.",
      "Heat oil in a pan and sauté the sliced onions until golden brown.",
      "Add the mixed vegetables and cook for 2-3 minutes.",
      "Sprinkle garam masala and salt, mix well.",
      "Drain the soaked rice and add it to the pan.",
      "Pour 2 cups of water, stir, and cover the lid.",
      "Cook on low flame until the rice is fully done and fluffy.",
      "Serve hot with raita or pickle."
    ]
  },
  {
    "id": "r2",
    "title": "Classic Pancakes",
    "cuisine": "American",
    "diet": "Vegetarian",
    "cookTime": 20,
    "difficulty": "Easy",
    "image": "https://www.pamperedchef.com/iceberg/com/recipe/1307769-lg.jpg",
    "ingredients": [
      "All-purpose flour - 1 cup",
      "Milk - 1 cup",
      "Egg - 1",
      "Baking powder - 2 tsp",
      "Sugar - 2 tbsp",
      "Butter - for cooking"
    ],
    "steps": [
      "In a mixing bowl, combine flour, sugar, and baking powder.",
      "In a separate bowl, whisk milk and egg until smooth.",
      "Gradually add the wet mixture to the dry ingredients and stir until lump-free.",
      "Heat a non-stick pan and lightly grease it with butter.",
      "Pour a small amount of batter to form a pancake.",
      "Cook until bubbles appear on the surface, then flip and cook the other side until golden.",
      "Repeat for remaining batter and serve with maple syrup or fruits."
    ]
  },
  {
    "id": "r3",
    "title": "Mediterranean Salad",
    "cuisine": "Mediterranean",
    "diet": "Vegan",
    "cookTime": 10,
    "difficulty": "Easy",
    "image": "https://krollskorner.com/wp-content/uploads/2019/06/Mediterranean-Orzo-Salad_LowRes-009.jpg",
    "ingredients": [
      "Tomatoes - 1 cup, chopped",
      "Cucumber - 1 cup, chopped",
      "Olives - 1/4 cup, sliced",
      "Olive oil - 2 tbsp",
      "Lemon juice - 1 tbsp",
      "Salt & Pepper to taste"
    ],
    "steps": [
      "Wash and chop tomatoes and cucumber into small cubes.",
      "Slice the olives thinly and add them to a large bowl.",
      "Combine all vegetables together.",
      "Drizzle with olive oil and lemon juice.",
      "Sprinkle salt and pepper.",
      "Toss everything gently until well mixed.",
      "Serve chilled as a refreshing appetizer."
    ]
  },
  {
    "id": "r4",
    "title": "Garlic Butter Shrimp",
    "cuisine": "Seafood",
    "diet": "Non-Veg",
    "cookTime": 15,
    "difficulty": "Medium",
    "image": "https://umamiology.com/wp-content/uploads/2024/03/Umamiology-Garlic-Butter-Shrimp-RecipeCard1.jpg",
    "ingredients": [
      "Prawns - 300g, cleaned",
      "Garlic - 4 cloves, minced",
      "Butter - 2 tbsp",
      "Parsley - 1 tbsp, chopped",
      "Salt & Pepper"
    ],
    "steps": [
      "Clean and devein the prawns, pat them dry.",
      "Heat butter in a pan on medium flame.",
      "Add minced garlic and sauté until fragrant.",
      "Add prawns, season with salt and pepper.",
      "Cook for 2-3 minutes on each side until pink.",
      "Sprinkle with chopped parsley.",
      "Serve immediately with bread or rice."
    ]
  },
  {
    "id": "r5",
    "title": "Tomato Basil Soup",
    "cuisine": "Italian",
    "diet": "Vegetarian",
    "cookTime": 25,
    "difficulty": "Easy",
    "image": "https://healthylittlepeach.com/wp-content/uploads/2020/09/roasted-tomato-soup-1-of-1-19.jpg",
    "ingredients": [
      "Tomatoes - 6, chopped",
      "Onion - 1, chopped",
      "Basil - handful",
      "Vegetable stock - 2 cups",
      "Olive oil - 1 tbsp"
    ],
    "steps": [
      "Heat olive oil in a pot.",
      "Add chopped onion and sauté until soft.",
      "Add chopped tomatoes and cook for 5 minutes.",
      "Pour vegetable stock and bring to a boil.",
      "Simmer for 10 minutes.",
      "Blend until smooth using a blender.",
      "Stir in fresh basil, season with salt and pepper.",
      "Serve hot."
    ]
  },
  {
    "id": "r6",
    "title": "Paneer Butter Masala",
    "cuisine": "Indian",
    "diet": "Vegetarian",
    "cookTime": 40,
    "difficulty": "Medium",
    "image": "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x500.jpg",
    "ingredients": [
      "Paneer - 200g, cubed",
      "Butter - 2 tbsp",
      "Tomato puree - 1 cup",
      "Cream - 1/4 cup",
      "Spices"
    ],
    "steps": [
      "Heat butter in a pan.",
      "Add tomato puree and cook until thick.",
      "Add spices like garam masala and salt.",
      "Simmer for 5 minutes.",
      "Add paneer cubes and mix well.",
      "Stir in cream and cook for 2 minutes.",
      "Serve with naan or rice."
    ]
  },
  {
    "id": "r7",
    "title": "Chicken Biryani",
    "cuisine": "Indian",
    "diet": "Non-Veg",
    "cookTime": 60,
    "difficulty": "Hard",
    "image": "https://vismaifood.com/storage/app/uploads/public/914/f47/fa9/thumb__1200_0_0_0_auto.jpg",
    "ingredients": [
      "Chicken - 500g",
      "Basmati rice - 2 cups",
      "Yogurt - 1/2 cup",
      "Spices",
      "Oil"
    ],
    "steps": [
      "Marinate chicken with yogurt and spices for 30 minutes.",
      "Cook basmati rice until 70% done.",
      "In a pot, layer marinated chicken at the bottom.",
      "Add the partially cooked rice on top.",
      "Cover and cook on low flame (dum) for 20 minutes.",
      "Fluff gently and serve hot."
    ]
  },
  {
    "id": "r8",
    "title": "Mango Smoothie",
    "cuisine": "Western",
    "diet": "Vegan",
    "cookTime": 10,
    "difficulty": "Easy",
    "image": "https://www.mydarlingvegan.com/wp-content/uploads/2021/06/Mango-Smoothie3.jpg",
    "ingredients": [
      "Mango - 1 cup, chopped",
      "Milk - 1 cup (or almond milk)",
      "Honey - 1 tbsp"
    ],
    "steps": [
      "Peel and chop ripe mango.",
      "Add mango, milk, and honey to a blender.",
      "Blend until smooth and creamy.",
      "Serve chilled."
    ]
  },
  {
    "id": "r9",
    "title": "Idli Sambar",
    "cuisine": "South Indian",
    "diet": "Vegetarian",
    "cookTime": 40,
    "difficulty": "Medium",
    "image": "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg",
    "ingredients": [
      "Idli batter",
      "Toor dal - 1/2 cup",
      "Tamarind - small ball",
      "Spices"
    ],
    "steps": [
      "Steam idlis in an idli cooker until soft.",
      "Cook toor dal until soft and mash it.",
      "Prepare tamarind water and add to the dal.",
      "Add sambar spices and bring to a boil.",
      "Serve hot with idlis."
    ]
  },
  {
    "id": "r10",
    "title": "Masala Macaroni",
    "cuisine": "Indian",
    "diet": "Vegetarian",
    "cookTime": 25,
    "difficulty": "Medium",
    "image": "https://dinedelicious.in/wp-content/uploads/2021/06/Cheese-Masala-Macaroni-4-500x500.jpg",
    "ingredients": [
      "Macaroni pasta – 200g",
      "Onion – 1, chopped",
      "Tomato – 1, chopped",
      "Butter – 2 tbsp",
      "Garam masala – 1 tsp",
      "Cream – 1/2 cup",
      "Salt & pepper to taste"
    ],
    "steps": [
      "Boil macaroni until al dente.",
      "Heat butter in a pan, sauté onions until translucent.",
      "Add chopped tomato and cook for 3–4 minutes.",
      "Add garam masala, salt, and pepper.",
      "Stir in cream and mix well.",
      "Toss cooked macaroni in the sauce and serve hot."
    ]
  },
  {
    "id": "r11",
    "title": "Vegetable Hakka Noodles",
    "cuisine": "Indian-Chinese",
    "diet": "Vegetarian",
    "cookTime": 30,
    "difficulty": "Medium",
    "image": "https://thechutneylife.com/wp-content/uploads/2017/09/TYFNgSGl-scaled.jpeg",
    "ingredients": [
      "Noodles – 200g",
      "Cabbage – 1 cup, shredded",
      "Carrot – 1 cup, julienned",
      "Capsicum – 1/2 cup, sliced",
      "Soy sauce – 2 tbsp",
      "Oil – 1 tbsp"
    ],
    "steps": [
      "Boil noodles and drain.",
      "Heat oil in a wok, sauté vegetables for 3–4 minutes.",
      "Add cooked noodles and soy sauce.",
      "Toss everything together on high flame for 2–3 minutes.",
      "Serve hot with chili sauce or tomato ketchup."
    ]
  },
  {
    "id": "r12",
    "title": "Gulab Jamun",
    "cuisine": "Indian",
    "diet": "Vegetarian",
    "cookTime": 40,
    "difficulty": "Easy",
    "image": "https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg",
    "ingredients": [
      "Khoya (milk solids) – 1 cup",
      "All-purpose flour – 2 tbsp",
      "Sugar – 1 cup",
      "Water – 1 cup",
      "Cardamom – 2 pods, crushed",
      "Ghee/oil – for frying"
    ],
    "steps": [
      "Mix khoya and flour to form a smooth dough.",
      "Shape into small balls without cracks.",
      "Prepare sugar syrup by boiling sugar, water, and cardamom.",
      "Heat ghee in a pan and deep-fry the balls on medium flame until golden brown.",
      "Soak fried balls in warm sugar syrup for 10–15 minutes.",
      "Serve warm or at room temperature."
    ]
  }
];

export default recipes;
