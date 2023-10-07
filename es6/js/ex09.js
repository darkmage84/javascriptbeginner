// Try catch => xử lý lỗi ngoại lệ (Exception)

console.log("Chương trình bắt đầu");
var a = 10;

try {
  // code logic
  // nếu đoạn chương trình trong block try bị lỗi -> đẩy lỗi sang block catch
  // và lưu thông tin vào biến Exception

  //   console.log(a);

  // nếu trường hợp là lỗi logic nhưng vẫn muốn đẩy vào ngoại lệ
  if (a < 20) {
    throw new Error("Biến a phải từ 20 trở lên");
  }
} catch (Exception) {
  //   console.log([Exception]);
  console.log(Exception.message);
} finally {
  console.log("Hoàn thành");
}

// Thứ tự: Try => Catch => Finally
// Try, catch chỉ xảy ra 1 trong 2

console.log("Hello");
