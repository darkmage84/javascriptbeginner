// DOM css
var btn = document.querySelector(".btn");
var content = document.querySelector(".content");

var css = {
  color: "white",
  fontStyle: "italic",
  fontWeight: "bold",
  backgroundColor: "black",
  lineHeight: 1.5,
};
// content.style.color = "red";

Object.assign(content.style, css);

// Bai tap:

var count = 0;

btn.addEventListener("click", function () {
  if (content.style.display === "") {
    content.style.display = "none";
    this.innetText = "Open";
  } else {
    content.style.display = "block";
    this.innetText = "Close";
  }

  count++;

  if ((count) => 5) {
    // this.setAttribute("disabled");
    this.disabled = true;
  }
});
