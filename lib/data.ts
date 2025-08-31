// Map common items to their categories
export const categories: Record<string, string> = {
  milk: "dairy",
  "milk 2%": "dairy",
  "almond milk": "dairy",
  yogurt: "dairy",
  eggs: "dairy",
  cheese: "dairy",

  bread: "bakery",
  "whole wheat bread": "bakery",

  apples: "produce",
  "organic apples": "produce",
  bananas: "produce",
  oranges: "produce",
  broccoli: "produce",

  rice: "pantry",
  pasta: "pantry",
  "tomato sauce": "pantry",

  toothpaste: "personal care",
  shampoo: "personal care",

  water: "beverages",
  "bottled water": "beverages",
  "orange juice": "beverages",
  coffee: "beverages",

  "potato chips": "snacks",
  "ice cream": "frozen",
  "chicken breast": "meat",

  "paper towels": "household"
};

// Suggestions for substitutes (realistic replacements)
export const substitutes: Record<string, string[]> = {
  milk: ["almond milk unsweetened", "soy milk", "oat milk"],
  "almond milk": ["soy milk", "cashew milk"],
  bread: ["multigrain bread", "gluten-free bread", "sourdough bread"],
  eggs: ["tofu", "chia egg", "egg substitute"],
  cheese: ["vegan cheese", "feta cheese"],
  rice: ["quinoa", "couscous", "cauliflower rice"],
  pasta: ["zucchini noodles", "whole wheat pasta"],
  "tomato sauce": ["pesto", "alfredo sauce"],
  "potato chips": ["popcorn", "baked chips"],
  "ice cream": ["frozen yogurt", "sorbet"]
};

// Seasonal produce by month
export const seasonalByMonth: Record<number, string[]> = {
  1: ["oranges", "kale", "carrots"],
  2: ["oranges", "spinach", "beets"],
  3: ["strawberries", "asparagus", "peas"],
  4: ["strawberries", "lettuce", "radishes"],
  5: ["mango", "blueberries", "cherries"],
  6: ["watermelon", "peaches", "tomatoes"],
  7: ["corn", "berries", "cucumbers"],
  8: ["grapes", "peppers", "plums"],
  9: ["apples", "pears", "squash"],
  10: ["pumpkin", "sweet potatoes", "broccoli"],
  11: ["cranberries", "brussels sprouts", "cauliflower"],
  12: ["citrus", "pomegranate", "leeks"]
};
