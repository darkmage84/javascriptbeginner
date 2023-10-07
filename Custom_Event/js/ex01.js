var btn = document.querySelector(".btn");
var countEl = document.querySelector(".count");
var message = document.querySelector(".message");

var countEvent = new Event("count");
// tên Custom Event không được trùng với các Event có sẫn
console.log(countEvent);

// btn.addEventListener("click", function () {
//   countEl.innerText++;

//   //   nếu count = 10 thì hiển thị nội dung vào thẻ div message
//   //   thủ công
//   /*
//   if (+countEl.innerText === 10) {
//     message.innerHTML = `<h2>Hello F8</h2>`;
//   }
//   */

//   if (+countEl.innerText === 10) {
//     countEl.dispatchEvent(countEvent);
//   }
// });

// countEl.addEventListener("count", function () {
//   console.log("Success");
// });

// TH: giữ chuột vào button Click thì count tự tăng liên tục, nhả chuột thì ngừng
// var isHold = false;
// btn.addEventListener("mousedown", function () {
//   isHold = true;
//   setInterval(function () {
//     if (isHold) {
//       countEl.innerText++;
//     }
//   }, 50);
// });

// btn.addEventListener("mouseup", function () {
//   isHold = false;
// });

var increEvent = new Event("increment");

btn.addEventListener("mousedown", function () {
  countEl.dispatchEvent(increEvent);
});

btn.addEventListener("mouseup", function () {
  isMouseDown = false;
});

// tạo 1 hàm đệ quy
var isMouseDown = false;
var handleIncrement = function (current) {
  current.innerText++;

  var id = setTimeout(function () {
    handleIncrement(current);
  }, 100);

  if (!isMouseDown) {
    clearTimeout(id);
  }
};

countEl.addEventListener("increment", function () {
  //   this.innerText++;
  isMouseDown = true;
  handleIncrement(this);
});

//
// Trigger Event

var quantity = document.querySelector(".quantity");
var quantityInput = document.querySelector("input");
var minusBtn = quantity.querySelector(".minus");
var plusBtn = quantity.querySelector(".plus");

var changeEvent = new Event("change");

plusBtn.addEventListener("click", function () {
  quantityInput.value++;

  quantityInput.dispatchEvent(changeEvent);
});

minusBtn.addEventListener("click", function () {
  quantityInput.value--;

  if (quantityInput.value < 0) {
    quantityInput.value = 0;
  }

  quantityInput.dispatchEvent(changeEvent);
});

quantityInput.addEventListener("change", function () {
  console.log(this.value);
});

//
//
var timer = document.querySelector(".timer");
// timer.addEventListener("change", function () {
//   //   console.log(this.value);
// });

var initialValue = null;
var dragEvent = new CustomEvent("drag");

document.addEventListener("mouseup", function () {
  initialValue = null;
});

timer.addEventListener("input", function () {
  if (!initialValue) {
    initialValue = this.value;
  }

  if (this.value !== initialValue) {
    timer.dispatchEvent(dragEvent);
  }
});

timer.addEventListener("drag", function (e) {
  //   console.log(this.value);
  console.log(e);
  console.log(e.target.value);
});
