// Scroll Event

window.addEventListener("scroll", function () {
  console.log("Scrolling ...", this.scrollY);
});

// Bai tap:
var btnTop = document.querySelector(".back");
btnTop.addEventListener("click", function (e) {
  document.documentElement.scrollTop = 0;
});

var backBtn = document.querySelector(".back");
window.addEventListener("scroll", function () {
  var position = this.scrollY;
  if (position >= 100) {
    backBtn.classList.add("show");
  } else {
    backBtn.classList.remove("show");
  }
});

// backBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();

//   //   window.scroll(0, 0);
//   scrollTo(0);
// });

// var scrollTo = function (position) {
//   //   console.log(window.scrollY);
//   var currentScrollY = window.scrollY;
//   var id = setInterval(function () {
//     currentScrollY -= 50;
//     window.scroll(0, currentScrollY);
//     if (currentScrollY < 0) {
//       clearInterval(id);
//     }
//   }, 10);
// };
