// 문자열
const name = "홍길동";
const message = `${name}님 안녕하세요!`;
// 리터럴 문법 쓸 땐 백틱으로 감싸줘야 함!
console.log(message);

// 숫자형
const num1 = 10;
const num2 = 10.2;
console.log(typeof num1);
console.log(typeof num2);

//undefined
let a;
console.log(a); // undefined = 할당되지 않음

let b = null;
console.log(b);

// 배열
const fruits = ["사과", "바나나", "오렌지"];
console.log(fruits[0]);
console.log(fruits.length);

// 객체
const person = {
  name: "홍길동",
  age: 25,
  isStudent: true,
};
console.log(person.name);
console.log(person["name"]);
person.age = 26;
