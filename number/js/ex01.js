// Number: kieu du lieu nguyen thuy
// Ham tao cua number la number

console.log(Number.prototype);
console.log([Number]);

var a = 4.5;
console.log(a);

// Kiem tra 1 bien co phai kieu number hay khong
if (a === 0 || (a && a.constructor.name === "Number")) {
  console.log("day la so");
} else {
  console.log("Day khong phai so");
}

// Kiem tra 1 so co phai so nguyen hay khong
if (Number.isInteger(a)) {
  console.log("So nguyen");
} else {
  console.log("Khong phai so nguyen");
}

// So NaN = Not a Number
var a = NaN;
console.log(typeof a); // number

var x = 10;
var y = "a";
var z = x - y;
console.log(z); // NaN

if (Number.isNaN(z)) {
  console.log("Khong phai la so");
} else {
  console.log(z);
}

// So infinity
var a = 10;
var b = 0;
var c = a / b;
console.log(c); // infinity
var d = 1000 ** 10000;
console.log(d); // infinity

if (c !== Infinity) {
  console.log(c);
} else {
  console.log("Qua gioi han");
}

// Ep kieu so nguyen
var a = "10a123";
a = parseInt(a);
console.log(a, typeof a); //10 'number'

// Ep kieu so thuc
var m = "10,5123a123";
console.log(m, typeof m);
m = Number.parseFloat(m);
console.log(m, typeof m);

// Ep kieu so
var a = "10,5";
// a = +a; // NaN
a = Number(a); // NaN
console.log(a, typeof a);

/*
Tong ket:
1. Kiem tra 1 so
- Khong phai NaN
- Khong phai Infinity
- typeof la number
*/
var a = NaN;
if (!isNaN(a) && a !== Infinity && typeof a === "number") {
  console.log("La so");
} else {
  console.log("Khong phai la so");
}

// Chuyen so thanh chuoi
var a = 10;
// a += "";
console.log(a, typeof a); //string
// hoac
a = a.toString(a);
console.log(a, typeof a); //string

// Lam tron va lay so luong phan thap phan
var a = 10.456;
a = a.toFixed(0); //lam tron
console.log(a);

//
var price = 12000000;
price = price.toLocaleString(); // them dau phay cho gia tien
console.log(price, typeof price);

console.log((Math.random() * 1000).toFixed(0));
