/*DEFENITIONS*/

function Meal(mealType, imgSrc, name, description, steps, ingredients) {
  this.mealType = mealType;
  this.imgSrc = imgSrc;
  this.name = name;
  this.description = description;
  this.steps = steps;
  this.ingredients = ingredients;
}

function makeMealColumn(meal) {
  const div = document.createElement("div");
  div.className = "col-md-4 col-12 pics";

  const img = document.createElement("img");
  img.src = meal.imgSrc;

  div.appendChild(img);

  const h3 = document.createElement("h3");
  h3.innerHTML = meal.name;

  div.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = meal.description;
  div.appendChild(p);
  return div;
}

/*MAIN*/

const meals = [];

const onepan = new Meal(
  "Breakfast",
  "./src/breakfast/onepan.jpg",
  "One-pan breakfast",
  "Inspired by my old-favourite Midnight pan-cooked breakfast, this recipe is all about the principle of cooking breakfast in one pan."
);

const eggAndMango = new Meal(
  "Breakfast",
  "./src/breakfast/eggmango.jpg",
  "Egg & mango chutney flatbreads",
  "Easy to make but delicious. Perfect show off breakfast for you, friends and family. Combination of mango and egg is amazing."
);

const smokedSalmon = new Meal(
  "Breakfast",
  "./src/breakfast/salmon.jpg",
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

meals.push(redApple);
//dinner

const blackApple = new Meal(
  "Dinner",
  "src/logo-black.png",
  "Black Apple",
  "Inspired by Justin Horn"
);

meals.push(blackApple);

let params = new URLSearchParams(location.search);
let currentMealType = params.get("meal");

if (!currentMealType) {
  currentMealType = document.getElementById("title").innerHTML;
} else {
  document.getElementById("title").innerHTML = currentMealType;
}

document.getElementById("headline").innerHTML = currentMealType;

meals
  .filter((x) => x.mealType === currentMealType)
  .forEach((x) => {
    document.getElementById("putMealsHere").appendChild(makeMealColumn(x));
  });
