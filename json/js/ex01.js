/* 
JSON (JavaScript Object Notation)
- là chuỗi
- mô tả dữ liệu 1 cách chính xác
- được dùng để giao tiếp dữ liệu giữa các nền tảng với nhau

Ví dụ:
F88 <-> app F88

- Chuyển dữ liệu từ web F88 thành định dạng chung mà App F88 đọc được 
(đảm bảo tính toàn vẹn của dữ liệu)

xml, json

-> hầu như các ngôn ngữ đều đọc được 
và chuyển thành kiểu dữ liệu của ngôn ngữ đó

- Các thao tác với json:

1. Chuyển từ các kiểu dữ liệu thành JSON
JSON.stringify()

2. Chuyển từ JSON về kiểu dữ liệu tương ứng
JSON.parse()
*/

var users = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@gmail.com",
  },

  {
    id: 2,
    name: "Nguyen Van B",
    email: "nguyenvanb@gmail.com",
  },

  {
    id: 3,
    name: "Nguyen Van C",
    email: "nguyenvanc@gmail.com",
  },
];

var json = JSON.stringify(users);
console.log(json);
console.log(typeof json);

// var a = true;

// console.log(typeof a);
// console.log(typeof JSON.stringify(a), JSON.stringify(a));

var users = JSON.parse(json);
console.log(users);

/* 
Nguyên tắc:
- key phải nằm trong dấu nháy kép
- kết thúc cặp key, value cuối cùng không được có dấu ,
// - bắt đầu chuỗi json bằng cặp ngoặc {}
*/
