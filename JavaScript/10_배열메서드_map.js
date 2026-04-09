//============ map ==============
// 1차원 배열
const numbers = [1, 2, 3, 4, 5];

// 기존 방식: for문
// const doubled = [];
// for (let i=0; i<numbers.length; i++) {
//   doubled.push(numbers[i]*2);
// }

// 매개변수가 1개이면 괄호 생략 가능
const doubled = numbers.map((num) => {
  return num * 2;
});
console.log(doubled);

// 객체 배열
const users = [
  { id: 1, name: "철수", age: 25 },
  { id: 2, name: "영희", age: 30 },
  { id: 3, name: "민수", age: 28 },
];
const names = users.map((user) => user.name);
console.log(names);

const userTags = users.map((user) => `<li>${user.name}(${user.age})</li>`);
console.log(userTags);

const UserList = () => {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};
