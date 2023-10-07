// ES6 Object, Array
/*
1. Destructuring

2. Spread

3. Enhance Object
*/

// 1. Destructuring
/*
    phá vỡ cấu trúc của array, object để có thể truy cập vào các phần tử
    và lưu thành các biến riêng biệt
*/

// object
// const user = {
//   name: "Furguson",
//   email: "waf@gmail.com",
//   age: 31,
//   address: "Ho Chi Minh",
// };

// const name = user.name;
// const email = user.email;
// console.log(name, email);

// const {name,email,age,address='Ha Noi'} = user;
// // address='Ha Noi' => gán giá trị mặc định
// console.log(name,email,age,address);

// const { name: _name, email, age, address = "Ha Noi" } = user;
// console.log(_name, email, age, address);

// const { name: _name, email, ...rest } = user;
// console.log(_name, email);
// console.log(rest); // trả về những thông tin còn lại ngoại trừ _name, email

// array
// const user = ["Anh", "anh@gmail.com", 31, "Ho Chi Minh", 10000000];
// const [username, email] = user;
// console.log(username, email);

// const [username, email, , address] = user;
// console.log(username, email, address); // bỏ qua tuổi

// const [username, email, , address, salary = 500000] = user;
// console.log(username, email, address, salary);

// const [username, email, ...rest] = user;
// console.log(username, email);
// console.log(rest);

// const [username, email, ...[age, address]] = user;
// console.log(username, email);
// console.log(age, address);

// var customers = [
//   {
//     id: 1,
//     name: "Nguyen A",
//   },
//   {
//     id: 2,
//     name: "Nguyen B",
//   },
//   {
//     id: 3,
//     name: "Nguyen C",
//   },
// ];

// var html = customers
//   .map(
//     ({ id, name }, index) =>
//       `
//     <h3>${index} - ${id} - ${name}</h3>
//     `
//   )
//   .join("");

// console.log(html);

// 2. Spread

// object
const oldObj = {
  name: "Nguyen Van A",
  email: "nguyena@gmail.com",
};

const newObj = {
  course: "Fullstack",
  teacher: "Hoang An",
  ...oldObj,
};

console.log(newObj);

// array
const oldArr = ["Hoang An F8", "hoangan@gmail.com"];
const newArr = [...oldArr];

console.log(newArr);

//
const getTotal = (a, b) => {
  console.log(a, b);
};

var values = [5, 10];
getTotal(...values);
