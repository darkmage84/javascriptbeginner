// Bài tập:

// Khi click vào nút "Click me"
// => Lấy toàn bộ content của div class content và chèn vào div class result
// Đồng thời xóa nội dung của div class content

/*
Gợi ý từng bước
1. Tạo element cần thiết: button, result, content
2. Gán sự kiện cho button
3. Lấy content từ div content và gán vào div result thông qua innerHTML
*/

var btn = document.querySelector(".btn");
var result = document.querySelector(".result");
var content = document.querySelector(".content");

if (btn && result && content) {
  var count = 0;
  btn.addEventListener("click", function () {
    if (result.innerHTML === "") {
      result.innerHTML = content.innerHTML;
      content.innerHTML = "";

      this.querySelector(".text").innerText = "Lên";
    } else {
      content.innerHTML = result.innerHTML;
      result.innerHTML = "";

      this.querySelector(".text").innerText = "Xuống";
    }

    count++;
    this.querySelector(".count").innerText = count;
  });
}
