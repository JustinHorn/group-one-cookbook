const mealType = getMealType();
document.getElementById("headline").innerHTML = mealType;

meals
  .filter((x) => x.mealType === mealType)
  .forEach((x) => {
    const column = makeMealColumn(x);
    document.getElementById("putMealsHere").appendChild(column);
  });

function getMealType() {
  let params = new URLSearchParams(location.search);
  let currentMealType = params.get("meal");

  if (!currentMealType) {
    currentMealType = document.getElementById("title").innerHTML;
  } else {
    document.getElementById("title").innerHTML = currentMealType;
  }
  return currentMealType;
}

function makeMealColumn(meal) {
  const div = document.createElement("div");
  div.className = "col-md-4 col-12 pics";

  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + meal.name;

  const img = document.createElement("img");
  img.src = meal.imgSrc;

  a.appendChild(img);

  div.appendChild(a);

  const h3 = document.createElement("h3");
  h3.innerHTML = meal.name;

  div.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = meal.description;
  div.appendChild(p);
  return div;
}
