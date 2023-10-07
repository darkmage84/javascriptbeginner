// bt1:
// total = 1 + 1*2 + 1*2*3 + .. + 1*2*3*..*n
/*
var n = 5;
var s = 1;
var total = 0;
for (var i = 1; i <= n; i++) {
  s = s * i;
  total += s;
}
console.log(`total = ${total}`);
*/

// bt2: kiem tra so nguyen to

var n = 196321268423;

// cach 1
/*
if (n > 1) {
  var uoc = 0;
  for (var i = 1; i <= n; i++) {
    if (n % i === 0) uoc++;
  }
  if (uoc === 2) console.log(`n = ${n} la so nguyen to`);
  else console.log(`n = ${n} khong la so nguyen to`);
} else console.log(`n = ${n} khong la so nguyen to`);
*/

// cach 2
var check = true;

if (n <= 1 || n % 1 !== 0) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      i = n;
    }
  }
}
if (check) {
  console.log(`${n} la so nguyen to`);
} else {
  console.log(`${n} la so nguyen to`);
}
