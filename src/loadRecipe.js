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
    const column = makeColumn(x);

    document.getElementById("putMealsHere").appendChild(column);
  });

function makeColumn(meal) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-12";

  const container = document.createElement("div");
  container.className = "container p-3 border card-1 d-flex";

  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + meal.name;

  const img = document.createElement("img");
  img.src = meal.imgSrc;
  img.className = "card-1";
  img.style.maxHeight = " 100px";

  a.appendChild(img);

  container.appendChild(a);

  const innerContainer = document.createElement("div");
  innerContainer.className = "container ";

  const h3 = document.createElement("h3");
  h3.innerHTML = meal.name;

  innerContainer.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = meal.description;
  innerContainer.appendChild(p);

  container.appendChild(innerContainer);

  col.appendChild(container);
  return col;
}
