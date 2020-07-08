const currentRecipeName = getName();

document.getElementById("title").innerHTML = currentRecipeName;

const recipe = meals.filter((x) => x.name === currentRecipeName)[0];

document.getElementById("recipeName").innerHTML = recipe.name;

document.getElementById("recipeImg").style.backgroundImage =
  "url(" + recipe.imgSrc + ")";

recipe.ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = element;
  document.getElementById("ingredients").appendChild(li);
});

recipe.steps.forEach((element) => {
  const li = document.createElement("li");
  li.innerHTML = element;
  document.getElementById("steps").appendChild(li);
});

function getName() {
  let params = new URLSearchParams(location.search);
  let currentRecipeName = params.get("name");

  if (!currentRecipeName) {
    currentRecipeName = document.getElementById("title").innerHTML;
  } else {
    document.getElementById("title").innerHTML = currentRecipeName;
  }
  return currentRecipeName;
}

document.getElementById("otherRecipes").innerHTML =
  "Check out other recipes from " + recipe.mealType;

meals
  .filter((x) => x.mealType === recipe.mealType && x.name != recipe.name)
  .forEach((x) => {
    const column1 = makeImageColumn(x);
    const column2 = makeTextColumn(x);

    document.getElementById("putMealsHere").appendChild(column1);
    document.getElementById("putMealsHere").appendChild(column2);
  });

function makeImageColumn(meal) {
  const col1 = document.createElement("div");
  col1.className = "col-md-4 col-8  d-flex justify-content-center ";

  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + meal.name;

  const img = document.createElement("img");
  img.src = meal.imgSrc;
  img.className = "card-1";
  img.style.transform = "rotate(90deg)";

  a.appendChild(img);

  col1.appendChild(a);

  return col1;
}

function makeTextColumn(meal) {
  const col2 = document.createElement("div");
  col2.className = "col-md-2 col-4 ";

  const h3 = document.createElement("h3");
  h3.innerHTML = meal.name;

  col2.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = meal.description;
  col2.appendChild(p);

  return col2;
}
