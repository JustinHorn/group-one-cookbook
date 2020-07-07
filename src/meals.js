/*DEFENITIONS*/

function Meal(mealType, imgSrc, name, description, steps, ingredients) {
  this.mealType = mealType;
  this.imgSrc = imgSrc;
  this.name = name;
  this.description = description;
  this.steps = steps;
  this.ingredients = ingredients;
}

/*MAIN*/

const meals = [];

const onepan = new Meal(
  "Breakfast",
  "./src/mealImages/onepan.jpg",
  "One-pan breakfast",
  "Inspired by my old-favourite Midnight pan-cooked breakfast, this recipe is all about the principle of cooking breakfast in one pan."
);

const eggAndMango = new Meal(
  "Breakfast",
  "./src/mealImages/eggmango.jpg",
  "Egg & mango chutney flatbreads",
  "Easy to make but delicious. Perfect show off breakfast for you, friends and family. Combination of mango and egg is amazing."
);

const smokedSalmon = new Meal(
  "Breakfast",
  "./src/mealImages/salmon.jpg",
  "Smoked salmon toasts",
  "Easy to make but delicious. Perfect show off breakfast for you, friends and family. Combination of mango and egg is amazing."
);

// breakfast
meals.push(onepan);
meals.push(eggAndMango);
meals.push(smokedSalmon);

//lunch

const redApple = new Meal(
  "Lunch",
  "src/logo-red.png",
  "Red Apple",
  "Inspired by Justin Horn"
);

const pancakes = new Meal(
  "Dinner",
  "./src/mealImages/b-pancakes.jpg",
  "Pancakes",
  "Inspired by Neo and Michael",
  [
    "Beat the eggs and then mix floar, milk and salt into it",
    "Heat up the pan with some butter",
    "Use a big laddle nd spreach a scoop of it on the pan",
    "Add fresh berries and chocolate syorup on them before serving",
  ],

  [
    "100g flour",
    "3 eggs flour",
    "100ml milk",
    "50g buter milk",
    "Variety of berries",
    "Chocolate syrup",
    "1tsp salt",
  ]
);
meals.push(pancakes);

meals.push(redApple);
//dinner

const blackApple = new Meal(
  "Dinner",
  "src/logo-black.png",
  "Black Apple",
  "Inspired by Justin Horn"
);

meals.push(blackApple);
