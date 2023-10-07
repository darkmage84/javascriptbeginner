// DOM Node

/* 
Sự kiện onload => trang web được tải xong
(tải xong all các assets: audio, img, video ...)
*/

// window.addEventListener("load", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

/*
Sự kiện DOMContentLoaded => cây DOM được hình thành
*/

// document.addEventListener("DOMContentLoaded", function () {
//   var title = document.querySelector(".title");
//   console.log(title);
// });

var root = document.querySelector("#root");
// Tạo Element Node
// Dùng phương thức: document.createElement('tag')

var h1 = document.createElement("h1");
h1.innerText = "Hello world";
h1.classList.add("title-h1");

// Render Element Node lên UI
// Điều kiện: phải có 1 element thật

root.appendChild(h1);

var ul = document.createElement("ul");

var li = document.createElement("li");
li.innerText = "item1";
ul.appendChild(li);

var li = document.createElement("li");
li.innerText = "item2";
ul.appendChild(li);

var li = document.createElement("li");
li.innerText = "item3";
ul.append("here");

root.appendChild(ul);
// appendChild chỉ nahanj node
// append chỉ nhận text

//
var h2 = document.createElement("h2");
h2.innerText = "keeeeeeeeeee";
root.prepend(h2);
// prepend đẩy lên đầu

// Thay đổi nội dung, thuộc tính 1 Node
h1.innerText = "hello f88";

// xóa:
h2.remove();

// Ví dụ: xây dựng ứng dụng Counter dùng DOM Node
var h2Counter = document.createElement("h2");
// h2Counter.innerText = "0";
h2Counter.innerText = "Count: ";

var countNumber = document.createTextNode(0);
// console.log(countNumber);

h2Counter.append(countNumber);

root.append(h2Counter);

var btnIncre = document.createElement("button");
btnIncre.innerText = "+";

root.append(btnIncre);

btnIncre.addEventListener("click", handleIncrement);

// btnIncre.addEventListener("click", function () {
//   var counterComment = document.createComment("Counter App");
//   root.append(counterComment);
// });

function handleIncrement() {
  // h2Counter.innerText++;

  // ép kiểu cho countNumber về dạng số rồi so sánh
  if (+countNumber.data === 10) {
    countNumber.remove();
  }
  countNumber.data++;
  //   console.log(countNumber);
}

// var handleIncrement = function () {
//   h2Counter.innerText++;
// };

// thêm node comment
var counterComment = document.createComment("Counter App");
root.append(counterComment);

// Thêm 1 node mới vào trước 1 node khác
var h2Title = document.createElement("h2");
h2Title.innerText = "Counter App";

root.insertBefore(h2Title, h2Counter);

// Thay thế node cũ bằng node mới
var h2TitleNew = document.createElement("h2");
h2TitleNew.innerText = "Ứng dụng đếm";

root.replaceChild(h2TitleNew, h2Title);
