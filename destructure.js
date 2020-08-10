const person = { name: 'Jack william', age: 17, job: "youtuber", address: "Alaska", phone: "Realme", gfName: "dog Enderson", friends: ["rofic", "korim", "jabid", "alim"]};
// const gfName = person.gfName;
const {phone, name, age} = person;
// const phone = person.phone;
// console.log(phone, name, age);
// console.log(phone, name, age);
  const complexObject = {
      name: 'abc',
      info: {
          address: 'colaBagan',
          leader: 'tiger'
      }
  }
  const {leader} = complexObject.info;

const friends = ["sakib", "rakib", "akib", "mukib"]

const [chotoFriend, nextFriend, ...restFriends] = friends;
console.log(leader);