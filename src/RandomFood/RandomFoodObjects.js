const foods = [
  {
    iconClass: "fa-bread-slice",
    title: "Bread",
    information:
      "Bread is a staple food prepared from a dough of flour and water, usually by baking.",
  },
  {
    iconClass: "fa-egg",
    title: "Eggs",
    information:
      "Eggs are a great source of protein and contain all nine essential amino acids.",
  },
  {
    iconClass: "fa-bowl-rice",
    title: "Rice",
    information:
      "Rice is a major source of energy and carbohydrates, especially in Asian cuisine.",
  },
  {
    iconClass: "",
    title: "Pasta",
    information:
      "Pasta is made from durum wheat and can be a quick and versatile meal option.",
  },
  {
    iconClass: "",
    title: "Potatoes",
    information:
      "Potatoes are rich in vitamin C, potassium, and fiber, especially in the skin.",
  },
  {
    iconClass: "",
    title: "Tomatoes",
    information:
      "Tomatoes are high in antioxidants, particularly lycopene, which is linked to many health benefits.",
  },
  {
    iconClass: "fa-cheese",
    title: "Cheese",
    information:
      "Cheese is a good source of calcium and protein and comes in hundreds of varieties.",
  },
  {
    iconClass: "fa-carrot",
    title: "Carrots",
    information:
      "Carrots are rich in beta-carotene, which the body converts into vitamin A, essential for vision.",
  },
  {
    iconClass: "fa-apple-whole",
    title: "Apples",
    information:
      "Apples are high in fiber and vitamin C, and they contain various antioxidants.",
  },
  {
    iconClass: "",
    title: "Bananas",
    information:
      "Bananas are a great source of potassium, which is important for heart health and muscle function.",
  },
  {
    iconClass: "fa-drumstick-bite",
    title: "Chicken",
    information:
      "Chicken is a lean protein source and contains essential vitamins and minerals like B6 and phosphorus.",
  },
  {
    iconClass: "",
    title: "Onions",
    information:
      "Onions are rich in vitamins, minerals, and antioxidants such as quercetin.",
  },
  {
    iconClass: "",
    title: "Garlic",
    information:
      "Garlic has potent medicinal properties and can boost the immune system.",
  },
  {
    iconClass: "",
    title: "Butter",
    information:
      "Butter is a dairy product rich in fats, used in cooking and baking for flavor and texture.",
  },
  {
    iconClass: "",
    title: "Yogurt",
    information:
      "Yogurt is a probiotic-rich food that aids digestion and is high in protein and calcium.",
  },
  {
    iconClass: "",
    title: "Salt",
    information:
      "Salt is essential for human life, helping to balance fluids in the body and support nerve function.",
  },
  {
    iconClass: "",
    title: "Pepper",
    information:
      "Black pepper enhances flavor and contains piperine, which may improve digestion and nutrient absorption.",
  },
  {
    iconClass: "",
    title: "Olive Oil",
    information:
      "Olive oil is high in monounsaturated fats and antioxidants, beneficial for heart health.",
  },
  {
    iconClass: "",
    title: "Honey",
    information:
      "Honey is a natural sweetener with antibacterial and anti-inflammatory properties.",
  },
  {
    iconClass: "",
    title: "Flour",
    information:
      "Flour is a key ingredient in baking and is made by grinding grains, typically wheat, into a powder.",
  },
  {
    iconClass: "",
    title: "Oats",
    information:
      "Oats are high in soluble fiber, particularly beta-glucan, which can help reduce cholesterol levels.",
  },
  {
    iconClass: "",
    title: "Peanut Butter",
    information:
      "Peanut butter is a good source of protein and healthy fats, often used as a spread or in recipes.",
  },
  {
    iconClass: "",
    title: "Canned Beans",
    information:
      "Canned beans are rich in protein, fiber, and essential nutrients, making them a convenient addition to meals.",
  },
  {
    iconClass: "",
    title: "Frozen Vegetables",
    information:
      "Frozen vegetables retain most of their nutrients and are a convenient way to include more veggies in your diet.",
  },
  {
    iconClass: "",
    title: "Canned Tuna",
    information:
      "Canned tuna is a lean protein source that is also high in omega-3 fatty acids, beneficial for heart health.",
  },
  {
    iconClass: "",
    title: "Brown Sugar",
    information:
      "Brown sugar contains molasses, giving it a distinct flavor and slightly higher mineral content than white sugar.",
  },
  {
    iconClass: "",
    title: "Soy Sauce",
    information:
      "Soy sauce is a fermented condiment rich in umami flavor, commonly used in Asian cuisine.",
  },
  {
    iconClass: "",
    title: "Vinegar",
    information:
      "Vinegar, especially apple cider vinegar, has antimicrobial properties and can aid in digestion.",
  },
  {
    iconClass: "",
    title: "Mustard",
    information:
      "Mustard seeds are rich in antioxidants and anti-inflammatory compounds.",
  },
  {
    iconClass: "",
    title: "Lettuce",
    information:
      "Lettuce is low in calories and high in water content, making it a hydrating food.",
  },
  {
    iconClass: "",
    title: "Cucumbers",
    information:
      "Cucumbers are hydrating, as they are 95% water, and they contain antioxidants and anti-inflammatory properties.",
  },
  {
    iconClass: "",
    title: "Oranges",
    information:
      "Oranges are an excellent source of vitamin C, which is important for immune function and skin health.",
  },
  {
    iconClass: "",
    title: "Bell Peppers",
    information:
      "Bell peppers are rich in vitamins A and C and provide antioxidants that support immune health.",
  },
  {
    iconClass: "",
    title: "Strawberries",
    information:
      "Strawberries are high in vitamin C, manganese, and antioxidants that have anti-inflammatory properties.",
  },
  {
    iconClass: "",
    title: "Zucchini",
    information:
      "Zucchini is low in calories and high in vitamins A and C, as well as fiber.",
  },
  {
    iconClass: "",
    title: "Spinach",
    information: "Spinach is a nutrient-dense leafy green rich in iron",
  },
  {
    iconClass: "",
    title: "Broccoli",
    information:
      "Broccoli is high in vitamins C and K and contains potent antioxidants that may support overall health.",
  },
  {
    iconClass: "",
    title: "Almonds",
    information:
      "Almonds are a good source of healthy fats, protein, fiber, and vitamin E.",
  },
  {
    iconClass: "",
    title: "Grapes",
    information:
      "Grapes contain antioxidants such as resveratrol, which can benefit heart health.",
  },
  {
    iconClass: "",
    title: "Cereal",
    information:
      "Many breakfast cereals are fortified with essential vitamins and minerals, making them a convenient and nutritious start to the day.",
  },
  {
    iconClass: "",
    title: "Milk",
    information:
      "Milk is full of nutrients, helps bones, and is a good source of protein.",
  },
];

const size = foods.length;
export { foods, size };
// lemmon, fish, shrimp, bacon,
