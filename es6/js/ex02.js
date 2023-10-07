//Function
/*
1. Arrow Function -> Hàm mũi tên


*/

//- Arrow Function không có tham số

// var getMessage = () => {
//   return "Hello F8";
// };

// console.log(getMessage());

//- Arrow Function có 1 tham số

// var getMessage = msg => {
//     return msg;
// }

// console.log(getMessage('Hello F8'));

// Arrow Function có nhiều tham số

var getMessage = (msg) => {
  return msg;
};

console.log(getMessage('hello'));

// Arrow Function có nhiều tham số
var getMessage = (msg, type='success') => {
    console.log(`msg = ${msg}`);
    console.log(`type = ${type}`);
}

getMessage('Hello F88', 'error');

// Arrow Function có return
var getTotal = (a, b) => a+b;
console.log(getTotal(10,20));

// Lưu ý: nếu return về 1 object -> bọc cặp ngoặc () 

var getCustomer = () => ({name: 'Hello A', email: 'buibinh@gmail.com'});
console.log(getCustomer());

// var users = [
//     {
//         name: 'Hello A', 
//         email: 'buibinh@gmail.com'
//     },
//     {
//         name: 'Hello B', 
//         email: 'buibinh123@gmail.com'
//     },
//     {
//         name: 'Hello C', 
//         email: 'buibinh456@gmail.com'
//     }
// ]

// var html = users.map((user) => `
// <h3>${user.name}</h3>
// <h3>${user.email}</h3>
// `).join('');

// document.body.innerHTML=html;

/*
- Lưu ý khi sử dụng Arrow Function

    + Không bind this, arguments

*/

// 1: this
// var btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     console.log(this);
// })

// var container = document.querySelector('.container');
// container.addEventListener('click', function() {
//     btn.addEventListener('click', () => {
//         console.log(this);
//     }) 
// })

// 2: this
// var products = document.querySelector('.products');
// var items = document.querySelectorAll('.products h2');

// items.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(this);
//     })
// })

// for (var i=0; i<items.length; i++) {
//     items[i].addEventListener('click', () => {
//         console.log(this);
//     })
// }

// 3: arguments
// var getMax = () => {
//     console.log(arguments);
// }
// lỗi

// var getMax = function() {
//     console.log(arguments); // array like object
// }
// getMax(1,6,8,3,4,9);

// 4: không phù hợp làm phương thức (method) cho object
var users = {
        name: 'Hello A', 
        email: 'buibinh@gmail.com',
        getName: () => {
            console.log(this);
            return this.email;
        }
}
console.log(users.getName());

// 5: không thể dùng làm hàm tạo (constructor)
// var Customer = () => {
//     this.name = 'Hello A';
//     this.getName = function() {
//         return name;
//     }
// }
// var customer = new Customer;

// 6:
var getMin = (msg, ...args) => {
    console.log(msg);
    console.log(args);
}

getMin('min la:', 5,6,3,1,8,6);