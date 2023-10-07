const getUser = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "user 1",
          salary: 1000,
        },
        {
          id: 2,
          name: "user 2",
          salary: 2000,
        },
        {
          id: 3,
          name: "user 3",
          salary: 3000,
        },
      ];
      const user = users.find(({ id: _id }) => _id === id);
      resolve(user);
    }, 1000);
  });
};

// getUser(1).then((data) => {
//   console.log(data);
// });
// users.forEach(async ({ id }) => {
//   //   getUser(id).then((data) => {
//   //     console.log(data);
//   //   });
//   const data = await getUser(id);
//   console.log(data);
// });

const lists = [1, 2, 3];

// Tính tổng Salary all users trong users

// (async () => {
//   lists.forEach(async (id) => {
//     const user = await getUser(id);
//     //   console.log(user.salary);
//     //   totalSalaryArr.push(user.salary);
//   });

//   // console.log(totalSalaryArr);
// })();

lists.forEach(async (id) => {
  const user = await getUser(id);
  //   console.log(user.salary);
  //   totalSalaryArr.push(user.salary);
});

// console.log(totalSalaryArr);

let total = 0;
// const getSalary = async () => {
//   for (let id of lists) {
//     const user = await getUser(id);
//     total += user.salary;
//   }
//   console.log(total);
// };
// getSalary();
// Promise.all()

const requests = lists.map(async (id) => await getUser(id));
// console.log(requests);
Promise.all(requests).then((users) => {
  //   console.log(data);
  const total = users.reduce((prev, current) => prev + current.salary, 0);
  console.log(total);
});
