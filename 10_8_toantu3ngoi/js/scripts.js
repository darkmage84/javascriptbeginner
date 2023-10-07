const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const isCoding = confirm("chúng ta có đang lập trình không?");
  const result = isCoding ? "Coding" : "Fix bugs...";
  document.getElementById("result").innerText = result;
});
