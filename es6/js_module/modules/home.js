/*
 - Muốn import từ file khác vào -> file được import phải được export
 - Có 2 loại import, export 
 + default 
 + named
*/

const user = {
  name: "user 1",
  email: "user1@gmail.com",
};

export default function getUser() {
  return user;
}

// Export Default -> trong 1 file chỉ có 1 export default
// Với fnc và class -> sử dụng export trực tiếp trước từ khóa fnc và class
// export default getUser;

/* */
// Export named
const course = {
  name: "fullstack",
  price: 5000,
};

export { user, course };

export const getCourse = () => {
  return ["a", "b"];
};
