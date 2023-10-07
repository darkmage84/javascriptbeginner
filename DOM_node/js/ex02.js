var todo = document.querySelector(".todos");
var todoList = todo.querySelector(".todo-list");
var todoForm = todo.querySelector("form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  var inputEl = this.children[0];

  var doName = inputEl.value;

  if (!doName.length) {
    return;
  }

  // todoList.innerHTML += `<p>${doName}</p>`;

  var p = document.createElement("p");
  p.innerText = doName;
  todoList.append(p);

  var btnDelete = document.createElement("button");
  btnDelete.innerText = "Delete";
  var div = document.createElement("div");
  div.append(p);
  div.append(btnDelete);
  todoList.append(div);
  btnDelete.addEventListener("click", function (e) {
    div.remove();
  });

  inputEl.value = "";
});

var content = document.querySelector(".content");

console.log(content.children);
console.log(content.childNodes);

// chon vao F8
content.childNodes[0].data = "F8 da duoc thay doi";

var h2 = document.querySelector(".content h2");
console.log(h2.parentNode);
console.log(h2.parentNode.childNodes);

h2.parentNode.childNodes.forEach(function (node) {
  // console.log(node);
  if (node.nodeName === "#comment") {
    node.remove();
  }
  // console.log(node.textContent.trim());

  if (node.nodeName === "#text" && node.textContent.trim() === "") {
    node.remove();
  }
});
