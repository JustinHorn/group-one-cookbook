const mealType = getMealType();
document.getElementById("headline").innerHTML = mealType;

const effectObjects = [];

meals
  .filter((x) => x.mealType === mealType)
  .forEach((x) => {
    const column = createMealColumn(x);
    document.getElementById("putMealsHere").appendChild(column);
    effectObjects.push(column);
  });

window.pageYOffset; // this is important for the animation dunno why - lg Justin

effectObjects.forEach((x) => {
  x.style.opacity = 1;
  x.style.marginLeft = "0";
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

function createMealColumn(meal) {
  const div = document.createElement("div");
  div.className = "col-md-4 col-12 pics";
  div.style =
    "opacity: 0; margin-left:-200px; transition: opacity 2s,margin 2s;";

  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + meal.name;

  const img = document.createElement("img");
  img.src = meal.imgSrc;
  img.className = "card-1";

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
