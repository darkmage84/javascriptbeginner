// Classes

// function user() {
//   this.name = "nguyen van a";
//   this.email = "nguyena@gmail.com";
//   this.age = 21;
//   this.getName = function () {
//     return this.name;
//   };
// }

class User {
  // Khai báo Constructor()
  // - Dùng để khai báo các thuộc tính, các giá trị khởi tạo
  // - Chạy đầu tiên khi object được khởi tạo

  constructor(name, email) {
    console.log("Constructor User");

    // định nghĩa thuộc tính
    // this.name = "nguyen van a";
    // this.email = "nguyena@gmail.com";
    this.name = name;
    this.email = email;

    // các giá trị khởi tạo
  }

  //   các phương thức
  getName() {
    return this.name;
  }

  getEmail() {
    return this.email;
  }
}

// const user = new User();
// console.log(user);

User.prototype.message = "Success";

// const user = new User("nguyen van a", "nguyena@gmail.com");
// console.log(user);

// console.log(user.name);
// console.log(user.email);
// console.log(user.getEmail());

class Authentication extends User {
  constructor(name, email, age) {
    console.log("Constructor Authentication");
    super(name, email);
    this.age = age;
  }

  getUser() {
    return {
      name: this.getName(),
      email: this.getEmail(),
    };
  }
}

// const auth = new Authentication("Nguyen Van B", "nguyenb@gmail.com", 31);

// console.log(auth);

// console.log(auth.getUser());

const root = document.querySelector("#root");

class Counter {
  constructor() {
    this.count = 0;
    this.h1 = null;
  }

  handleIncrement = () => {
    this.count++;
    // console.log(this.button);
    this.h1.innerText = this.count;
  };

  render() {
    this.h1 = document.createElement("h1");
    this.h1.innerText = this.count;

    const button = document.createElement("button");
    button.innerText = "+";
    button.addEventListener("click", this.handleIncrement);

    root.append(this.h1);
    root.append(button);
  }
}

new Counter().render();
