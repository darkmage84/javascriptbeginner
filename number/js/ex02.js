console.log(Math);

// 1. Lay tri tuyet doi
var a = -10;
console.log(Math.abs(a));

// 2. Lay ngau nhien
console.log((Math.random() * 1000).toFixed(0));
// random() chi cho gia tri tu 0 den 1

// 3. Lam tron xuong
var a = 10.9;
console.log(Math.floor(a));

// 4. Lam tron len
var a = 10.1;
console.log(Math.ceil(a));

// 5. Lam tron theo quy tac
var a = 10.5;
console.log(Math.round(a));

// 6. Can bac hai
var a = 9;
console.log(Math.sqrt(a));

// 7. So lon nhat
console.log(Math.max(1, 5, 4, 9, 3, 1, 6, 7));
console.log(Math.min(1, 5, 4, 9, 3, 1, 6, 7));
