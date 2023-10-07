// chuỗi

//khai báo chuỗi
/* 

var fullname = "Bui Quang Binh";
console.log(fullname);

var fullname2 = String("Quang Binh");
console.log(fullname2);

var fullname3 = new String("Binh Bui Quang");
console.log(fullname3, typeof fullname3);

// kiểm tra 1 chuỗi

if (typeof fullname === "string") {
  console.log(true);
} else console.log(false);
*/

// String => hàm tạo => dùng để tạo ra các object liên quan đến chuỗi
// Trong hàm tạo String sẽ có các thuộc tính (biến), phương thức (hàm) để xử lý chuỗi
// việc tạo ra các phương thức, thuộc tính đó

// các phương thức xử lý chuỗi

var str = "xin chao cac ban";
console.log(str);

// 1. length() trả về độ dài của chuỗi
console.log(str.length);

// 2. charAt(index) => lấy 1 ký tự theo index
console.log(str.charAt(0));

// 3. charCodeAt(index) => trả về mã ASCII của ký tự index
console.log(str.charCodeAt(0));

// 4. slice(start, end) => cắt chuỗi từ vị trí start đến end
console.log(str.slice(1, 5));
console.log(str.slice(5));
console.log(str.slice(-3));

// 5. indexOf(subStr) => trả về vị trí đầu tiên tìm được của chuỗi con trong chuỗi cha, nếu không thấy sẽ trả về -1
console.log(str.indexOf("c"));

// 6. lastIndexOf(subStr) => trả về vị trí cuối cùng tìm được
console.log(str.lastIndexOf("c"));

// bt hoangan.web@gmail.com => lấy username
console.log("bai tap cat chuoi: ");

var emailName = "hoangan.web@gmail.com";
var location_end = emailName.indexOf("@");
console.log(emailName.slice(0, location_end));

// 7. includes(subStr) => tìm chuỗi subStr trong chuỗi cha, nếu tìm thấy => true
console.log(str.includes("chao"));

// 8. concat(str1, str2, ..) => nối chuỗi
console.log(str.concat(" item1 ", " item2 "));

// 9. replace(tucantim, tuthaythe)
console.log(str.replace("xin", "Khong"));

// 10. replaceAll thay thế tất cả

// 11. split(char) => tách chuỗi thành mảng
console.log(str.split(" "));

// 12. trim() => loại bỏ khoảng trắng đầu và cuối chuỗi
var str2 = "  Bui  Quang Binh   ";
console.log(str2);
console.log(str2.trim());
// trimStart()
// trimEnd()

// 13. toLowerCase() => chuyển thành chữ thường
// 14. toUpperCase() => chuyển thành chữ hoa

var welcome = "Chào mừng bạn đến với F8";
