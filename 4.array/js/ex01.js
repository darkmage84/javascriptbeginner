console.log(Array.prototype);
console.log([Array]);

// khai báo mảng

var users = [];
// var users = new Array();
users = ["một", "hai", "ba"];
console.log(users.length);

// kiếm tra biến có thuộc kiểu mảng hay không?
if (Array.isArray(users)) {
  console.log("Mảng");
} else console.log("Không phải mảng");

// truy cập vào 1 phần tử của mảng
console.log(users[1].length);
console.log(users[2]);

// thêm phần tử vào mảng
users[users.length] = "mới";

// sửa phần tử
// users[1] = "giá trị mới";

// duyệt mảng

// 1. duyệt bằng for
for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}
console.log(users);

// 2. duyệt bằng for in => trả về index
for (var index in users) {
  console.log(users[index]);
}

// 3. duyệt bằng for of => trả về element
for (var user of users) {
  console.log(user);
}

// XÓA 1 phần tử
var results = [];
var indexDelete = 0;
for (var index in users) {
  if (+index === +indexDelete) {
    continue;
  }
  results[results.length] = users[index];
}
console.log(results);
