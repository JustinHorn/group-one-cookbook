let params = new URLSearchParams(location.search);
const lunchType = params.get("meal");

console.log("hi");
const ajaxFolder = "src/meals/" + lunchType + "/";

let folders = [];

$.ajax({
  url: ajaxFolder,
  success: function (data) {
    console.log(data);
    $(data)
      .find("a:contains(/)") // is folder
      .each(function () {
        let folderName = urlToFolderName(this.href);
        $.get("src/meals/" + lunchType + "/" + folderName + "/info.json").then(
          (data) => {
            data.folder = folderName;
            addToHTML(1, data);
          }
        );
      });
  },
  error: function (err, data) {
    console.log(err);
  },
});

function urlToFolderName(url) {
  let hrefSplit = url.split("/");
  return hrefSplit[hrefSplit.length - 2];
}

function addToHTML(index, data) {
  document.getElementById("h" + index).innerHTML = data.folder;
  document.getElementById("p" + index).innerHTML = data.description;
  document.getElementById("img" + index).src =
    "src/meals/" + lunchType + "/" + data.folder + "/img.jpg";
}
