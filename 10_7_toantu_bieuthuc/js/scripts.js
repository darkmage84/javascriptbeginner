const number1 = 10;
const number2 = 5;
const number3 = 2;

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const sum = number1 + number2 + number3;
  const sub = number1 - number2 - number3;
  const mul = number1 * number2 * number3;
  const div = number1 / number2 / number3;
  document.getElementById(
    "result"
  ).innerText = `Tổng: ${sum}, Hiệu: ${sub}, Tích: ${mul}, Thương: ${div}`;
});
