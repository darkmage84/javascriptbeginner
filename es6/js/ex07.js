// const html = `
// <h2>Khoa hoc fullstack</h2>
// <p>Hello F8</p>
// `;

const html = (strings, personExp, ageExp, addressExp) => {
  console.log(strings);
  console.log(personExp);
  console.log(ageExp);
  console.log(addressExp);
};

const person = "user1";
const age = 21;
const address = "Hai Duong";
const output = html`toi ten la ${person}, toi ${age} tuoi, toi o ${address}`;

// trả về chuỗi
