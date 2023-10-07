var carousel = document.querySelector(".carousel");

var carouselInner = carousel.querySelector(".carousel-inner");

var carouselNav = carousel.querySelector(".carousel-nav");

var navNext = carouselNav.querySelector(".next");
var navPrev = carouselNav.querySelector(".prev");

// 1. Tính toán số lượng ảnh:
var carouselItems = carouselInner.querySelectorAll(".item");
// console.log(carouselItems.length);

// 2. Xử lý
if (carouselItems.length) {
  // 2.1. Lấy chiều rộng của 1 item
  var itemWidth = carouselInner.clientWidth;
  // clientWidth trả về chiều rộng của Element

  // 2.2. Tính tổng chiều rộng các item
  var totalWidth = itemWidth * carouselItems.length;

  // 2.3. Cập nhật CSS cho carousel-inner
  carouselInner.style.width = `${totalWidth}px`;

  // 2.4. Xử lý chuyển slide khi click vào button
  var position = 0;
  navNext.addEventListener("click", function () {
    if (Math.abs(position) < totalWidth - itemWidth) {
      position -= itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });

  navPrev.addEventListener("click", function () {
    if (position < 0) {
      position += itemWidth;
      carouselInner.style.translate = `${position}px`;
    }
  });
}
