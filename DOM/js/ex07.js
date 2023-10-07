/* 
Event object

*/

var btn = document.querySelector(".btn");
var nameEl = document.querySelector(".name");

// btn.addEventListener("click", function (e) {
//   console.log(e);
//   // pointerEvent
//   if (!e.ctrlKey) {
//     this.style.backgroundColor = "red";
//   } else {
//     this.style.backgroundColor = "green";
//   }
// });

// Di chuyen button khi keo tha chuot

var isDown = false;
var offsetX = 0;
var offsetY = 0;

btn.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    isDown = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
  }
});

document.addEventListener("mousemove", function (e) {
  if (isDown) {
    var css = {
      top: `${e.clientY - offsetY - 6}px`,
      left: `${e.clientX - offsetX - 6}px`,
    };

    Object.assign(btn.style, css);
  }
});

document.addEventListener("mouseup", function (e) {
  isDown = false;
});

// Hanh dong mac dinh cua html
// click vao the a thi khong chuyen trang sang duong link trong href
// su dung:  e.preventDefault()

var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

// preventDefault() cua document
document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Khong duoc click chuot phai");
});

// content
var content = document.querySelector(".content");
var span = document.querySelector("span");

// content.addEventListener("click", function (e) {
//   console.log("content clicked");
// });

// span.addEventListener("click", function (e) {
//   e.stopPropagation();
//   window.console.log("span clicked");
// });
// click span => ca the cha va con deu duoc click
// khac phuc: e.stopPropagation()

// content 2
content.addEventListener("click", function (e) {
  //   console.log(this);
  console.log(e.target);
});
// Lay ra chinh xac thanh phan duoc click chuot: e.target
