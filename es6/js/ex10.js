// Async Await

/*
- Async Await là 1 fnc => luôn trả về 1 promise
*/

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve("Helooooo");
      reject("Helosososoooso");
    }, 1000);
  });
};

// IIFE
// (async () => {
//   try {
//     const data = await getData();
//     console.log(data);
//   } catch (Exception) {
//     console.log(Exception);
//   } finally {
//     console.log("Hoanf thanhf");
//   }
// })();

// const getName = async () => {
//   //   getData().then((data) => {
//   //     console.log(data);
//   //   }); // heloooooo

//   const data = await getData();
//   console.log(data);
//   //   return data;
// };

// const getName = async () => {
//   return "Hello";
// };

// console.log(getName()); => trả về 1 promise

// getName().then((data) => {
//   console.log(data);
// }); // hello

// getName();

// bai tap:

const getA = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Get A");
    }, 1000);
  });
};
const getB = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Get B");
    }, 200);
  });
};
const getC = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Get C");
    }, 500);
  });
};

(async () => {
  try {
    // let data = await getA();
    // console.log(data);
    // const dataB = await getB();
    // console.log(dataB);
    // const dataC = await getC();
    // console.log(dataC);
    // console.log(await getA());
    // console.log(await getB());
    // console.log(await getC());
  } catch (Exception) {
    console.log(Exception.message);
  }
})();

const getRequest = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const response = {
        text: () => {
          return new Promise((resolve) => {
            resolve(JSON.stringify(data));
          });
        },
        json: () => {
          return new Promise((resolve) => {
            resolve(data);
          });
        },
      };
      const data = {
        name: "quang binh",
        email: "qb@gmail.com",
      };

      resolve(response);
    }, 1000);
  });
};

// getRequest()
//   .then((response) => {
//     // console.log(response);
//     return response.text();
//     // data sẽ trả về object
//     // nếu response.text => trả về json
//   })
//   .then((data) => {
//     console.log(data);
//   });

(async () => {
  const response = await getRequest();
  const data = await response.json();

  console.log(data);
})();
