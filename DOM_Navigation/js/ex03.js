// 3: nextElementSibling: trả về phần tử tiếp theo cùng cấp độ
// trả về Element
// TH khác: nextSibling: trả về Node

// 4. previousElementSibling: trả về phần tử trước đó theo cùng cấp độ

var productActive = document.querySelector(".products .active");
// console.log(productActive.nextElementSibling);
// console.log(productActive.previousElementSibling);

// Bai tap:

var btnPrev = document.querySelector(".prev");
var btnNext = document.querySelector(".next");

btnNext.addEventListener("click", function (e) {
  var nextElement = productActive.nextElementSibling;

  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }

  nextElement.classList.add("active");
  productActive.classList.remove("active");

  productActive = nextElement;
});

btnPrev.addEventListener("click", function (e) {
  var prevElement = productActive.previousElementSibling;

  if (prevElement === null) {
    prevElement = document.querySelector(".products h2:last-child");
  }

  prevElement.classList.add("active");
  productActive.classList.remove("active");

  productActive = prevElement;
});

// Tách hàm Next thành 1 hàm riêng
/*
var handleNext = funtion() {
  var nextElement = productActive.nextElementSibling;

  if (nextElement === null) {
    nextElement = document.querySelector(".products h2");
  }

  nextElement.classList.add("active");
  productActive.classList.remove("active");

  productActive = nextElement;
}

// Khi đó:
btnNext.addEventListener('click', handleNext);

// Muốn tự động chạy:
setInterval(handleNext, 500);
*/

// TH: đưa chuột vào menu thì handleNext dừng, nhả chuột ra sẽ chạy tiếp
// bắt sự kiện bằng mouseover và mouseout
/*
var isHover = false;

var products = document.querySelector('.products');

products.addEventListener('mouseover', function() {
    isHover = true;
})

products.addEventListener('mouseout', function() {
    isHover = false;
})

setInterval(function () {
    // check hover
    if (!isHover) {
        handleNext();
    }
}, 500);
*/
