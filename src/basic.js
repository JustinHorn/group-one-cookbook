let params = new URLSearchParams(location.search);
const lunchType = params.get("meal");

$.get("src/" + lunchType + "/info.json", function (data) {
  const recepieCount = data.count;
  for (let n = 1; n <= recepieCount; n++) {
    $.get("src/" + lunchType + "/recepie" + n + "/info.json", function (data) {
      document.getElementById("h" + n).innerHTML = data.header;
      document.getElementById("p" + n).innerHTML = data.description;
      document.getElementById("img" + n).src =
        "src/" + lunchType + "/recepie" + n + "/img.jpg";
    });
  }
});
