// 1. Định nghĩa hàm

/* hàm không tham số
function tenHam() {
    Nội dung Hàm
}
*/

/*
function tenHam(thamso1, thamso2, ...) {
    Nội dung Hàm
}
*/

// 2. Gọi hàm

/*
function getMsg() {
  console.log("Xin chao");
}
getMsg();

function getMessage(msg, type = "success") {
  console.log(`Xin chao ${msg}`);
  console.log(`type ${type}`);
}

getMessage("hehe", "error");
*/

// Hàm void: không có giá trị trả về
/*
function getTotal(a, b) {
  var s = a + b;
  console.log(`s = ${s}`);
}
getTotal(1, 2);

function getTotal2(a, b) {
  var s = a + b;
  return s;
}
getTotal2(5, 10);
console.log(getTotal2(6, 10));
*/

// Expression Function (anonymous function)

/*
var getMessage = function (msg) {
  return msg;
};

console.log(getMessage("Xin chào"));

if (typeof getMessage === "function") {
  console.log("Day la funtion");
}
*/

// Callback function

/*
var getA = function (a) {
  a();
};

var getB = function () {
  console.log(`getB`);
};

getA(getB);
*/

var getA = function (fn, ...args) {
  setTimeout(function () {
    console.log("getA");
    if (typeof fn === "function") {
      fn(args); //lời gọi hàm chủ động tường minh
      //getB()
      //getC()
    }
  }, 2000);
};

var getB = function (name, content) {
  console.log("getB", name, content);
};

var handleGetB = function () {
  getB("hahhaa");
};

var getC = function () {
  console.log("getC");
};

// getA(getC);
// getA(handleGetB);
// getA(function () {
//   getB("hehe");
// });

getA(getB, "alo", "heheelsld");
