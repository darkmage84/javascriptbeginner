var name = "what ever";
console.log(name);

var user = "admin";
var getUser = function () {
  return user;
};

// biến, hàm => con của đối tượng có tên là Window
// truy cập vào 1 biến, hàm trong 1 đối tượng JS bằng cách sử dụng cú pháp sau:
// tendoituong.tenbien, tendoituong.tenHam()

console.log(window);
console.log(window.user);
console.log(window.getUser());
