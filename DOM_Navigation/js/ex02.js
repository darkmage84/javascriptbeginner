// 2. children: lấy danh sách phần tử con cấp gần nhất

var menu = document.querySelector(".menu");

var items = menu.children; // trả về Array-like object
// console.log(items);
// trả về HTMLCollention

// truy cập vào bên trong
items = menu.children[1].children;
// console.log(items);

// Bài tập:

// click vào item của menu dưới đây
// nếu item có menu con thì đổi màu nền của cả menu con
// ngược lại, đổi màu chữ của item vừa click vào

var linkList = menu.querySelectorAll(".menu a");

if (linkList.length) {
  linkList.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      if (this.parentElement.children.length > 1) {
        this.parentElement.children[1].style.background = "red";
      } else {
        this.style.color = "green";
      }
    });
  });
}
