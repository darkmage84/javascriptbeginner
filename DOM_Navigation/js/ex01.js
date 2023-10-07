// DOM Navigation

// 1. parentElement: lấy phần tử cha cấp gần nhất

var removeBtnList = document.querySelectorAll(".products .remove");

if (removeBtnList) {
  removeBtnList.forEach(function (removeBtn) {
    removeBtn.addEventListener("click", function (e) {
      this.parentElement.remove();
    });
  });
}
