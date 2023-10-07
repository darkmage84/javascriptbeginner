console.log(Array.prototype);

var users = ["một", "hai", "ba"];

// 1.
// at(index) => lấy ra phần tử theo index
// console.log(users.flat(0));

// 2.
// concat(arr2, arr3, ..) => nối mảng
// console.log(users.concat([1, 2, 3], [9, 8, 7]));
// console.log(users.concat("bốn", "năm")); thêm phần tử mới vào mảng

// 3.
// indexOf(value) => tìm vị trí đầu tiên xuất hiện của phần tử trong mảng.
// Nếu không tìm thấy trả về -1
// console.log(users.indexOf("một"));

// 4.
// lastIndexOf(value) => trả về vị trí cuối cùng xuất hiện
// console.log(users.lastIndexOf("năm"));

// 5.
// includes(value) => tìm phần tử trong mảng và trả về true/false
// console.log(users.includes("năm"));

// 6.
// slice(start, end) => cắt mảng từ start đến end
// console.log(users.slice(1));

// 7.
// join(char) => nối các phần tử mảng thành chuỗi
// console.log(users.join(""));
// chuỗi: dùng hàm split để tách chuỗi thành mảng.

// bài tập: tách tên từ chuỗi họ và tên
// var fullname = "Bùi Quang Bình";
// var arr = fullname.split(" ");
// console.log(arr.slice(-1));
// console.log(arr[arr.length - 1]);

// 8.
// push() => thêm phần tử vào cuối mảng và trả về số lượng phần tử sau khi thêm xong
// var count = users.push("item1", "item2", "item3");
// console.log(count);
// console.log(users);

// 9.
// unshift() => thêm phần tử vào đầu mảng và trả về số lượng phần tử sau khi thêm xong
// var count = users.unshift("item1", "item2", "item3");
// console.log(users);

// 10.
// pop() => xóa phần tử cuối mảng và trả về giá trị phần từ vừa xóa
// var value = users.pop();
// console.log(value);
// console.log(users);

// 11.
// shift() => xóa phần tử đầu mảng và trả về giá trị vừa xóa
// var value = users.shift();
// console.log(value);
// console.log(users);

// 12.
// splice(index, number) => xóa number phần từ từ vị trí thứ index trong mảng
users.splice(1, 1); // xóa 1 phần tử từ vị trí user[1]
users.splice(1, 2, "item1", "item2"); // xóa 2 phần từ từ vị trí user[1] thay thế bằng .
console.log(users);

// 13.
// reverse() => đảo ngược mảng

users.reverse();
console.log(users);

// 14.
// sort() => sắp xếp mảng theo thứ tự tăng dần
users.sort(); // chỉ áp dụng với chuỗi
console.log(users);

var numbers = [5, 8, 2, 13, 1];
console.log(numbers);
numbers.sort(function (next, prev) {
  //   if (prev > next) {
  //     return -1;
  //   }
  return next - prev;
  /* 
  tham số thứ 1 là phần tử sau
  2 là trước
  return về số âm => đổi chỗ
  */
});
console.log(numbers);

// bài tập:
var customers = [
  "Tạ Hoàng An",
  "tạ hoàng an",
  "nguyễn hoàng anh",
  "nguyễn thị yến",
  "nguyễn văn dũng",
  "mai thị tâm",
];
// sắp xếp danh sách khách hàng tăng dần theo tên
customers.sort();
console.log(customers);

var getFirstName = function (fullname) {
  return fullname.split(" ").slice(-1);
};
customers.sort(function (next, prev) {
  if (getFirstName(prev) > getFirstName(next)) {
    return -1;
  }
});
console.log(customers);
