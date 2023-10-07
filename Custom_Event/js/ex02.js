// HTMLElement

var title = document.querySelector(".title");

// console.log(title);

// console.log(HTMLElement.prototype);

/*
var css = {
  border: "1px solid red",
  background: "yellow",
};

// Object.assign(title.style, css);

var changeCSS = function (elenemt, style) {
  Object.assign(elenemt.style, style);
};

changeCSS(title, css);
*/

HTMLElement.prototype.changeCSS = function (style) {
  Object.assign(this.style, style);
};

title.changeCSS({
  border: "1px solid red",
  background: "yellow",
});
