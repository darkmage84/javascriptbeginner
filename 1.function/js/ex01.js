// hàm con, closure

var getMessage = function () {
  var display = function () {
    console.log("what ever");
  };

  display();
};

getMessage();

var sum = function (a) {
  return function (b) {
    return a + b;
  };
};

var add = sum(10); // trả về function

// qua 1 quá trình xử lý => có giá trị biến b
console.log(add(20));

// giải thuật đệ quy

//bt1: tính tổng s = 1+2+3+..+N
var S = 1;

function factorial(number) {
  if (number % 1 !== 0 || number <= 0) {
    return "unknown";
  }

  if (number > 0) {
    return number * factorial(number - 1);
  }
}

console.log(factorial(4));
