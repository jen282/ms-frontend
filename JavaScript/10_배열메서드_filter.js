//============ filter ==============

// 일차원 배열
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//짝수만 필터링
const evens = numbers.filter((num) => num % 2 == 0);
console.log(evens);

// 5보다 큰 숫자만 필터링
const bigNums = numbers.filter((num) => num > 5);
console.log(bigNums);

// 객체 배열
const users = [
  { id: 1, name: "철수", age: 25, isActive: true },
  { id: 2, name: "영희", age: 30, isActive: false },
  { id: 3, name: "민수", age: 28, isActive: true },
];

// 활성 사용자만
const activeUsers = users.filter((user) => user.isActive);

// 나이가 27세 이상인 사람만
const adults = users.filter((user) => user.age >= 27);
