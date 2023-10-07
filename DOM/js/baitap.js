var title = document.querySelector(".title");
var checkItems = document.querySelectorAll(".check-item");

var count = 0;

title.addEventListener("change", function (e) {
  count = title.checked ? checkItems.length : 0;

  checkItems.forEach(function (checkItem) {
    checkItem.checked = title.checked;
  });
});

checkItems.forEach(function () {
  checkItem.addEventListener("change", function () {
    if (checkItem.checked) {
      count++;
    } else {
      count--;
    }
  });
});
