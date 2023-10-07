// bài tập:
Array.prototype.map2 = function (callbackFn) {
  if (typeof callbackFn !== "function") {
    return;
  }

  var array = this;
  var newArr = [];

  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var result = callbackFn(element, i);
    newArr[newArr.length] = result;
  }

  return newArr;
};

var users = ["User 1", "User 2", "User 3"];

var newArr = users.map2(function (user, index) {
  return `<h2>${index} - ${user}</h2>`;
});

// console.log(newArr);
// document.write(newArr);

// bài tập 2:
var obj1 = {
  name: "bui quang binh",
  email: "buibinh@gmail.com",
};

var obj2 = {
  gender: "nam",
  age: 21,
};

// nối 2 object trên ko dùng hàm
// Object.keys(obj2).forEach(function (key) {
//   obj1[key] = obj2[key];
// });

// console.log(obj1);

// hàm assign
var obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// tạo object không có prototype
var obj11 = Object.create(null);
console.log(obj11);

// sao chép object
var a = {
  name: "bui quang binh",
  email: "buibinh@gmail.com",
};

var b = Object.assign({}, a);
console.log(b);

// không được gán trực tiếp qua dấu = , var b = a;
