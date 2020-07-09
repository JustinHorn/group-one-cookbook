document.getElementById("otherRecipes").innerHTML =
  "Check out other recipes from " + recipe.mealType;

const effectObjects = [];

// add meals

meals
  .filter((x) => x.mealType === recipe.mealType && x.name != recipe.name)
  .forEach((x) => {
    addColumn(x);
  });

// show on Scroll into seight
window.addEventListener("scroll", function (e) {
  const pageSize = window.innerHeight + window.pageYOffset;

  effectObjects.forEach((x) => {
    if (x[1] <= pageSize) {
      x[0].style.opacity = 1;
      x[0].style.marginLeft = "";
    }
  });
});

function calcHeight(obj) {
  let top = obj.offsetTop + obj.clientHeight;

  while (obj.offsetParent) {
    obj = obj.offsetParent;
    top += obj.offsetTop;
  }
  return top;
}

function addColumn(recipe) {
  const column = createColumn(recipe);

  document.getElementById("putMealsHere").appendChild(column);
  effectObjects.push([column, calcHeight(column)]);
}

function createColumn(recipe) {
  const col = document.createElement("div");
  col.className = "col-md-6 col-12";
  col.style =
    "opacity: 0; margin-left:-200px; transition: opacity 3s,margin 3s;";

  const container = createContainer(recipe);

  col.appendChild(container);
  return col;
}

function createContainer(recipe) {
  const container = document.createElement("div");
  container.className = "container p-3 border card-1 d-flex";

  const AImage = createAImage(recipe);

  container.appendChild(AImage);

  const innerContainer = createInnerContainer(recipe);
  container.appendChild(innerContainer);
  return container;
}

function createAImage(recipe) {
  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + recipe.name;

  const img = document.createElement("img");
  img.src = recipe.imgSrc;
  img.className = "card-1";
  img.style.maxHeight = " 100px";

  a.appendChild(img);
  return a;
}

function createInnerContainer(recipe) {
  const innerContainer = document.createElement("div");
  innerContainer.className = "container ";

  const h3 = document.createElement("h3");
  h3.innerHTML = recipe.name;

  innerContainer.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = recipe.description;
  innerContainer.appendChild(p);
  return innerContainer;
}
