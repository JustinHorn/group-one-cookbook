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
