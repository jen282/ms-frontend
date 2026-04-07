// 함수 표현식
const add = function (x, y) {
  return x + y;
};

console.log(add(1, 2));

// 화살표 함수

//기존 방식
function add(a, b) {
  return a + b;
}

// 화살표 함수
const add = (a, b) => {
  return a + b;
};

const add = (a, b) => a + b;

const double = (x) => x * 2;

//===========연습문제=============
//1.
const square = (n) => n * n;
console.log(square(5));

//2.
const greet = (name, greeting = "안녕하세요") => {
  return `${greeting}, ${name}님!`;
};
console.log(greet("홍길동"));
console.log(greet("김철수", "반갑습니다"));

//3.
const isPassed = (score) => score >= 60;
console.log(isPassed(75));
