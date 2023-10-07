// import getUser from "./modules/home.js";
// import home from "./modules/home.js";
// import { course, user, getCourse as getCourseList } from "./modules/home.js";

// // import getUser, { course, user, getCourse } from "./modules/home.js";

// console.log(getUser());
// console.log(course);
// console.log(getCourseList());
// // import default viết trước

// import tất cả 1 file
import * as home from "./modules/home.js";
console.log(home.course);
console.log(typeof home);
const { course, default: getUser, getCourse, user } = home;
//console.log(course);
//console.log(getUser());
//console.log(getCourse());
//console.log(user);
