// Classes
/* 
class Person {
  constructor(name, email) {
    // thuộc tính non-static
    this.name = name;
    this.email = email;
  }

  // phương thức non-static
  getName() {
    return this.name;
  }

  // phương thức static
  static getEmail() {
    return "@gmail.com";
  }

  // thuộc tính static
  static displayName = "F8 hoc lap trinh";
}

const person = new Person("quang binh", "buibinh@gmail.com");
console.log(person.getName());
console.log(Person.getEmail());
console.log(Person.displayName);
*/

/*
Bài tập: tạo class User có các thuộc tính sau
- data = chứa danh sách user 
- name
- email
- password

Viết các phương thức xử lý
- add() = thêm user mới
- getInfo() = lấy thông tin user theo id

Tạo class Authentication kế thừa từ class User và xây dựng các phương thức sau
- login = trả về id của user nếu thành công
- register = trả về thông tin user đăng ký thành công, kiểm tra email tồn tại
- profile = lấy thông tin user theo id
*/

class User {
  constructor() {
    this.data = [];
    this.name = null;
    this.email = null;
    this.password = null;
  }

  static self = null;

  getId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.password;
  }

  getInfo(id) {
    const user = this.data.find(({ id: _id }) => id === _id);
    delete user.password;
    return user;
  }

  isExist(email) {
    return this.data.find(({ email: _email }) => email === _email);
  }

  add(name, email, password) {
    if (!this.isExist(email)) {
      this.data.push({
        id: this.data.length + 1,
        name,
        email,
        password,
      });
    }
  }
}

// const user = new User();
// user.add("nang hai anh", "haianh@gmail.com");
// user.getName();
// // user.getInfo(0);

// const user1 = add(name, email, password);

class Auth extends User {
  static login(email, password) {
    const user = this.self.data.find((item) => {
      return item.email === email && item.password == password;
    });
    if (user) {
      return user.id;
    }
  }

  static register(name, email, password) {
    return this.self.add(name, email, password);
  }
}

new Auth();
Auth.register("nguoi dung thu nhat", "user1@gmail.com", "123456");
Auth.register("nguoi dung thu hai", "user2@gmail.com", "123456");
Auth.register("nguoi dung thu ba", "user3@gmail.com", "123456");
Auth.register("nguoi dung thu tu", "user4@gmail.com", "123456");
