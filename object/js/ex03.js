// Object.prototype.

// định nghĩa hàm tạo
var Person = function (name, email, age) {
  // định nghĩa là thuộc tính
  this.name = "bui quang binh";
  this.email = "buibinh@gmailcom";
  this.age = 21;

  var current = this;

  this.getName = function () {
    return current.name;
  };
};

// khởi tạo đối tượng
var person = new Person("binh", "buibinh@gmail.com", 21);
console.log(person.name);

// Person.prototype.getMessage = function () {
//   return "what ever";
// };

// console.log(person.getMessage());

// kiểm tra 1 object được khởi tạo từ hàm tạo nào
console.log(person.constructor.name);

var arr = [];
console.log(arr.constructor.name);

// tạo 1 hàm nội bộ từ 1 hàm tạo
Person.isPerson = function () {
  console.log("hello");
};

Person.isPerson();
