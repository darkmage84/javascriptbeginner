// Xử lý bất đồng bộ

// const step1 = () => {
//   console.log("step 1");
// };

// const step2 = () => {
//   console.log("step 2");
// };

// const step3 = () => {
//   console.log("step 3");
// };

// step1();
// step2();
// step3();

/**
- 3 cách xử lý bất đồng bộ

1. callback

2. promise

3. async await fnc
*/

/* 1. Callback
const getUsers = (callback) => {
  setTimeout(() => {
    console.log("User list ...");
    if (typeof callback === "function") {
      callback();
    }
  }, 1000);
};

const showMessage = () => {
  console.log("User list successful!");
};

getUsers(showMessage);
*/

/* 2. Promise

Các trạng thái của Promise
- pending
- fulfilld
- reject 
*/

const getUsers = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        {
          name: "user1",
          email: "user1@gmail.com",
        },
      ];
      // console.log("ok");
      resolve(data);
      reject("Lỗi kết nối");
    }, 2000);
  });

  return promise;
};

const showMessage = () => {
  console.log("User list successful!");
};

// getUsers()
//   .then((user) => {
//     console.log(user);
//     showMessage();
//   })
//   .catch((error) => {
//     console.log("error");
//   });

// getUsers().then((user) => {
//   console.log(user);
// });

// console.log(getUsers());

// Promise Chaining

const step1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetA");
    }, 1000);
  });
};

const step2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetB");
    }, 2000);
  });
};

const step3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("GetC");
    }, 1500);
  });
};

// step1().then((data) => {
//   console.log(data);
//   step2().then((data) => {
//     console.log(data);
//     step3().then((data) => {
//       console.log(data);
//     });
//   });
// });

step1()
  .then((data) => {
    console.log(data);
    return step2();
  })
  .then((data) => {
    console.log(data);
    return step3();
  })
  .then((data) => {
    console.log(data);
  })
  .finally(() => {
    console.log("Done");
  });
