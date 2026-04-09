const products = [
  { id: 1, name: "노트북", price: 1000000, inStock: true },
  { id: 2, name: "마우스", price: 30000, inStock: false },
  { id: 3, name: "키보드", price: 80000, inStock: true },
  { id: 4, name: "모니터", price: 300000, inStock: true },
];

// 재고가 있는 상품의 이름만 추출
const availableProducts = products
  .filter((product) => product.inStock)
  .map((product) => product.name);

console.log(availableProducts);

//============ 연습문제 ==============

// 문제 1: 다음 점수 배열에서 80점 이상인 점수만 필터링하세요
const scores = [95, 72, 88, 63, 91, 55, 87];
const isPass = scores.filter((score) => score >= 80);
console.log(isPass);

// 문제 2: 다음 학생 배열에서 각 학생의 이름만 추출하세요
const students = [
  { id: 1, name: "김철수", grade: 3 },
  { id: 2, name: "이영희", grade: 2 },
  { id: 3, name: "박민수", grade: 1 },
];
const studentNames = students.map((student) => student.name);
console.log(studentNames);

// 문제 3: 다음 학생 배열에서 2학년 이상 학생들의 이름만 추출하세요
const notFreshman = students
  .filter((student) => student.grade >= 2)
  .map((student) => student.name);
console.log(notFreshman);
