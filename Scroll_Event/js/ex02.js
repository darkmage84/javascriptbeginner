// Fixed Header

var header = document.querySelector(".header");
var body = document.body;

var headerHeight = header.clientHeight;
var currentY = 0;
var scrollType;

window.addEventListener("scroll", function (e) {
  var y = this.scrollY;

  if (y > currentY) {
    scrollType = "down";
  } else {
    scrollType = "up";
  }

  currentY = y;

  console.log(scrollType);

  if (y >= headerHeight) {
    header.classList.add("fixed");
    body.style.paddingTop = `${headerHeight + 15}px`;
  } else {
    header.classList.remove("fixed");
    body.style.paddingTop = 0;
  }

  if (scrollType === "up") {
    header.classList.remove("fixed");
    body.style.paddingTop = 0;
  }

  //   console.log(y);
});

// Khi scroll len se mat fixed header
// Xac dinh hanh dong keo thanh cuon len

// scroll to section
var navItems = header.querySelectorAll(".menu li a");

navItems.forEach(function (navItem) {
  //   console.log(navItem);
  navItem.addEventListener("click", function (e) {
    e.preventDefault();

    var hash = this.getAttribute("href");
    // console.log(hash);

    var section = document.querySelector(hash);
    // console.log(section);

    var sectionOffsetTop = section.offsetTop;
    // console.log(sectionOffsetTop);

    window.scroll(0, sectionOffsetTop - headerHeight - 15);
  });
});
