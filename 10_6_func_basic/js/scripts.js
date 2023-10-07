// alert()
// Hàm alert() được sử dụng để hiển thị một thông báo cho người dùng trong một hộp thoại
/*
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Xin chao!");
});
*/

// ---------------------------------------------

// confirm()
// Hàm confirm() được sử dụng để hiển thị một hộp thoại xác nhận và trả về giá trị true hoặc false
// tùy thuộc vào việc người dùng nhấn OK hay Hủy bỏ
/*
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  var result = confirm("chac chan xoa?");
  if (result === true) alert("nguoi dung chon OK");
  else alert("nguoi dung chon HUY BO");
});
*/

// ---------------------------------------------

// setTimeout()
// Hàm setTimeout() được sử dụng để thực thi một hàm sau một khoảng thời gian nhất định
/*
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  setTimeout(function () {
    alert("xin chao");
  }, 1000);
  // Sau 1000ms thì hộp thoại sẽ hiển thị
});
*/

// ---------------------------------------------

// setInterval()
// Hàm setInterval() được sử dụng để thực thi một hàm lặp đi lặp lại
// sau một khoảng thời gian nhất định

const btn = document.getElementById("btn");
let number = document.getElementById("number");
let counter = parseInt(number.innerText);
// Lấy giá trị hiện tại của thẻ span dưới dạng số nguyên
btn.addEventListener("click", () => {
  setInterval(function () {
    ++counter;
    number.innerText = counter;
  }, 1000);
  // Sau mỗi 1000ms, thẻ span sẽ được cập nhật giá trị mới
});
