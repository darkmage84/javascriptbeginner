/*
API application programming interface

- fron-end với back-end
- back-end với back-end
- sử dụng các hàm trong 1 thư viện
- ..

Khi làm việc với web api = thường sử dụng chuẩn REST FUL

- URL: Server API + path: resource
- HTTP Method: phương thức giao tiếp
    + GET => lấy dữ liệu
    + POST => thêm mới dữ liệu
    + PUT => cập nhật dữ liệu
    + PATCH => cập nhật dữ liệu
    + DELETE => xóa dữ liệu

=> back-end sẽ xây dựng

ví dụ: 
- URL: https://api.fullstack.edu.vn/users 

- Tổng hợp HTTP method + resource => endpoint

Ví dụ: 
- POST /users 
- GET /users 

Làm sao để lấy API

- Sử dụng dịch vụ có sẵn
- Fake bằng thư viện: JSON SERVER 

*/

// Sử dụng hàm fetch() để gọi API
// fetch() trả về 1 promise
const apiURL = `http://localhost:3000/users`;

const getUsers = async () => {
  const response = await fetch(apiURL);
  // console.log(response);
  // response sẽ trả về thông tin của response sau khi gọi api

  const users = await response.json();
  console.log(users);
  // trả về response message body

  document.body.innerHTML = users
    .map(({ name, email }) => `<h2>${name}</h2><h3>${email}</h3><hr/>`)
    .join("");
};

getUsers();

const getUser = async (id) => {
  const response = await fetch(apiURL + "/" + id);
  const user = await response.json();
  console.log(user);
};

getUser(1);

const postUser = async (data) => {
  const response = await fetch(apiURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    console.log("success");
  }
};

// postUser({
//   name: "User4",
//   email: "user4@actvn.edu.vn",
// });
