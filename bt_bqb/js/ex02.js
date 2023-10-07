var keyword = "i";

var title = `<p>từ khóa tìm kiếm: <b>${keyword}</b></p>`;

var content = ` Lorem ipsum, dolor sit amet consectetur quang bình adipisicing elit. Quo animi
reiciendis deserunt dolore similique obcaecati Quang Bình tempora doloremque
perspiciatis, aliquid dolor doloribus nobis QUANG BÌNH impedit, veritatis deleniti modi
veniam numquam minima ipsam. `;

// document.write(title + content);

var result = ``;

var count = 0;

var position = content.toLowerCase().indexOf(keyword.toLowerCase());

while (position !== -1) {
  result +=
    content.slice(0, position) +
    `<span>${content.slice(position, position + keyword.length)}</span>`;

  // xóa bỏ nội dung đã được lưu vào biến result
  content = content.slice(position + keyword.length);

  // thực hiện tìm lại với content mới
  position = content.toLowerCase().indexOf(keyword.toLowerCase());

  count++;
}
console.log(result);

result += content;

var countHtml = `<p>Đã tìm thất <b>${count}</b> từ <b>${keyword}</b> trong đoạn văn</p>`;
document.write(title + result + countHtml);
