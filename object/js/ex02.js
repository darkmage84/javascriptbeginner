Object.prototype.combine = function (...args) {
  var result = [];
  var currentObj = this;
  if (args.length) {
    args.forEach(function (arg) {
      result.push(currentObj[arg]);
    });
  }
  return result;
};

var user = {
  name: "bui quang binh",
  email: "buibinh@gmail.com",
  age: "21",
};

var games = {
  name: ["CSSGO", "HTMLOL"],
  type: "PK",
  rank: "silver",
};

console.log(user.combine("name", "email", "age"));
console.log(games.combine("name", "type", "rank"));
