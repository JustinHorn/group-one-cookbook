document.getElementById("otherRecipes").innerHTML =
  "Other " + recipe.mealType.toLowerCase() + " recipes";

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
  const a = document.createElement("a");
  a.style = "text-decoration:none;";
  a.href = "recipeJs.html?name=" + recipe.name;
  const container = document.createElement("div");
  container.className = "container p-3 border card-1";

  const row = document.createElement("div");
  row.className = "row";

  const col1 = document.createElement("div");
  col1.className = "col col-sm-3 col-12 d-flex";

  const col2 = document.createElement("div");
  col2.className = "col col-sm-9 col-12";

  const AImage = createImage(recipe);

  col1.appendChild(AImage);

  const innerContainer = createInnerContainer(recipe);
  col2.appendChild(innerContainer);

  row.appendChild(col1);
  row.appendChild(col2);

  container.appendChild(row);
  a.appendChild(container);
  return a;
}

function createImage(recipe) {
  const a = document.createElement("a");
  a.href = "recipeJs.html?name=" + recipe.name;

  const img = document.createElement("img");
  img.src = recipe.imgSrc;
  img.classList.add("card-1");
  img.classList.add("mx-auto");
  img.style.maxHeight = "200px";

  return img;
}

function createInnerContainer(recipe) {
  const innerContainer = document.createElement("div");
  innerContainer.className = "";

  const h3 = document.createElement("h3");
  h3.innerHTML = recipe.name;

  innerContainer.appendChild(h3);

  const p = document.createElement("p");
  p.innerHTML = recipe.description;
  innerContainer.appendChild(p);
  return innerContainer;
}
