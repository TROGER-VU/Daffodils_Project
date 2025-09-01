// Map common items to their categories
export const categories: Record<string, string> = {
  // Dairy
  milk: "dairy",
  "milk 2%": "dairy",
  "almond milk": "dairy",
  yogurt: "dairy",
  eggs: "dairy",
  cheese: "dairy",
  paneer: "dairy",
  butter: "dairy",
  curd: "dairy",
  ghee: "dairy",

  // Bakery
  bread: "bakery",
  "whole wheat bread": "bakery",

  // Produce
  apples: "produce",
  "organic apples": "produce",
  bananas: "produce",
  oranges: "produce",
  broccoli: "produce",
  onions: "produce",
  tomatoes: "produce",
  potatoes: "produce",
  mango: "produce",
  cucumber: "produce",
  spinach: "produce",
  cabbage: "produce",
  cauliflower: "produce",
  okra: "produce",
  brinjal: "produce",
  "bottle gourd": "produce",
  carrots: "produce",
  ginger: "produce",
  garlic: "produce",
  lemon: "produce",

  // Pantry
  rice: "pantry",
  "basmati rice": "pantry",
  atta: "pantry",
  flour: "pantry",
  pasta: "pantry",
  "tomato sauce": "pantry",
  sugar: "pantry",
  salt: "pantry",
  oil: "pantry",
  honey: "pantry",
  jaggery: "pantry",
  pickle: "pantry",
  ketchup: "pantry",
  "instant noodles": "pantry",
  soup: "pantry",
  "peanut butter": "pantry",
  mayonnaise: "pantry",

  // Beverages
  water: "beverages",
  "bottled water": "beverages",
  "orange juice": "beverages",
  coffee: "beverages",
  tea: "beverages",
  "green tea": "beverages",
  "cold drink": "beverages",
  "energy drink": "beverages",
  "coconut water": "beverages",

  // Snacks
  "potato chips": "snacks",
  biscuits: "snacks",
  chocolates: "snacks",

  // Frozen
  "ice cream": "frozen",
  "frozen peas": "frozen",
  "frozen paratha": "frozen",
  "paneer tikka": "frozen",
  "french fries": "frozen",
  "idli batter": "frozen",
  "dosa batter": "frozen",

  // Meat
  "chicken breast": "meat",
  mutton: "meat",
  fish: "meat",

  // Household
  "paper towels": "household",
  detergent: "household",
  dishwash: "household",
  "floor cleaner": "household",
  "toilet cleaner": "household",
  tissues: "household",

  // Personal care
  toothpaste: "personal care",
  shampoo: "personal care",
  soap: "personal care",
  sanitizer: "personal care",
  handwash: "personal care",
  "shaving cream": "personal care",

  // Baby care
  diapers: "baby care",
  "baby wipes": "baby care",
  "baby lotion": "baby care",

  // Dry fruits
  almonds: "dry fruits",
  cashews: "dry fruits",
  raisins: "dry fruits",
  walnuts: "dry fruits",
  groundnuts: "dry fruits",

  // Breakfast
  oats: "breakfast",
  cornflakes: "breakfast"
};

// Suggestions for substitutes (realistic replacements)
export const substitutes: Record<string, string[]> = {
  milk: ["almond milk unsweetened", "soy milk", "oat milk"],
  "almond milk": ["soy milk", "cashew milk"],
  bread: ["multigrain bread", "gluten-free bread", "sourdough bread"],
  egg: ["tofu", "chia egg", "egg substitute"],
  cheese: ["vegan cheese", "feta cheese"],
  paneer: ["tofu", "soya chunks"],
  rice: ["quinoa", "couscous", "cauliflower rice"],
  atta: ["multigrain flour", "gluten-free flour"],
  pasta: ["zucchini noodles", "whole wheat pasta"],
  "tomato sauce": ["pesto", "alfredo sauce"],
  "potato chips": ["popcorn", "baked chips", "makhana"],
  "ice cream": ["frozen yogurt", "sorbet"],
  coffee: ["green tea", "herbal tea"],
  tea: ["green tea", "lemon tea"],
  chicken: ["paneer", "mushrooms", "tofu"],
  mutton: ["jackfruit", "soya chunks"],
  fish: ["tofu", "mushrooms"],
  butter: ["margarine", "olive oil"],
  ghee: ["olive oil", "coconut oil"],
  sugar: ["jaggery", "stevia"],
  salt: ["rock salt", "sea salt"],
  apples: ["pears", "oranges", "grapes"],
  apple: ["pears", "oranges", "grapes"],
  "organic apples": ["pears", "guava", "plums"]
};

// Seasonal produce by month (India-centric)
export const seasonalByMonth: Record<number, string[]> = {
  1: ["oranges", "carrots", "spinach", "peas"],
  2: ["strawberries", "cauliflower", "radish", "beetroot"],
  3: ["mango", "papaya", "pineapple", "peas"],
  4: ["mango", "jackfruit", "watermelon", "tomatoes"],
  5: ["mango", "lychee", "plum", "okra"],
  6: ["jamun", "peach", "melon", "bottle gourd"],
  7: ["corn", "cucumber", "zucchini", "pumpkin"],
  8: ["grapes", "apple", "guava", "beans"],
  9: ["apple", "pear", "pomegranate", "cabbage"],
  10: ["pumpkin", "sweet potato", "spinach", "broccoli"],
  11: ["oranges", "radish", "cauliflower", "beetroot"],
  12: ["citrus", "pomegranate", "peas", "leeks"]
};