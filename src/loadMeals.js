loadMeals();

function loadMeals() {
  let params = new URLSearchParams(location.search);
  const lunchType = params.get("meal");
  const ajaxFolder = "src/meals/" + lunchType + "/";
  $.ajax({
    url: ajaxFolder,
    success: function (data) {
      $(data)
        .find("a:contains(/)") // is folder
        .each(function () {
          const folderName = hrefToFolderName(this.href);
          const recipe = ajaxFolder + folderName;

          $.get(recipe + "/info.json").then((data) => {
            data.name = folderName;
            data.imgSrc = recipe + "/img.jpg";
            addToHTML(1, data);
          });
        });
    },
    error: function (err, data) {
      console.log(err);
    },
  });
}

function hrefToFolderName(url) {
  let hrefSplit = url.split("/");
  return hrefSplit[hrefSplit.length - 2];
}

function addToHTML(index, data) {
  document.getElementById("appendHere").appendChild(createEntrie(index, data));
}

function createEntrie(id, data) {
  const col = document.createElement("div");
  col.className = "col";
  col.appendChild(createContainer(id, data));

  return col;
}

function createContainer(id, data) {
  const container = document.createElement("div");
  container.className = "container";

  container.appendChild(createH1(id, data));

  container.appendChild(createImg(id, data));

  container.appendChild(createP(id, data));

  return container;
}

function createH1(id, meal) {
  return createElement("h1", id, "mealName", meal.name);
}

function createImg(id, meal) {
  const img = createElement("img", id, "mealImage", "");
  img.src = meal.imgSrc;
  img.style.width = "50%";
  return img;
}

function createP(id, meal) {
  return createElement("p", id, "mealDescription", meal.description);
}

function createElement(type, id, className, innerHTML) {
  const element = document.createElement(type);
  element.id = type + "." + id;
  element.className = className;
  element.innerHTML = innerHTML;
  return element;
}
