/*
DOM: document object model
1. DOM element: truy xuat cac the html => tao doi tuong html
2. DOM css: thay doi css inline cua the html
3. DOM html: thay doi noi dung va thuoc tinh cua the html
4. DOM event: gan su kien cho cac the html
5. DOM event listener: lang nghe cac su kien
6. DOM navigation: thao tac voi cac element phan cap
7. DOM node, nodelist: thao tac voi the html thong qua Node (object)
*/

/* 
1. DOM Element: truy xuat vao cac the html da co san
- Truy xuat thong qua id: document.getElementById(id)
- Truy xuat thong qua class: document.getElementByClassName(class)
- Truy xuat thong qua tagname: document.getElementByTagName(tag)
- Truy xuat thong qua css selector: 
# document.querySelector(selector)
# document.querySelectorAll(selector)
*/

// var title = document.getElementById("title");
// console.log(title);
// console.log([title]);
// console.log(title.innerText);

// var titleList = document.getElementsByClassName("title");
// console.log(titleList);
// for (var index = 0; index < titleList.length; index++) {
//   console.log(titleList[index]);
// }

// var titleList = document.getElementsByTagName("h1");
// console.log(titleList);

var title = document.querySelectorAll("h1.title");
console.log(title);
title.forEach(function (title) {
  console.log(title.innerHTML);
});
