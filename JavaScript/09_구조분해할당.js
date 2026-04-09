//============ 객체 구조 분해 ===============
// const user = {
//   name: "김철수",
//   age: 30,
//   email: "kim@example.com",
//   job: "개발자",
// };

// 직접 할당
const name_bef = user.name;
const email_bef = user.email;

// 구조분해할당
// 변수 이름 = 키 이름과 똑같이 설정
// const { name, email } = user;
// console.log(name);
// console.log(email);

// 변수명 변경
const { name: userName, email: userEmail } = user;
console.log(userName);
console.log(userEmail);

// 기본값 할당
const { phone = "없음" } = user;
console.log(phone);

//============ 배열 구조 분해 ===============
const colors = ["red", "green", "blue"];

//배열 순서대로 할당
const [first, second, third] = colors;
console.log(first);
console.log(second);
console.log(third);

const [firstcolor, , thirdcolor] = colors;
console.log(firstcolor);
console.log(thirdcolor);

//============ 함수 인자 구조 분해 ===============
function printUser({ name, age }) {
  console.log(name, age);
}

//============ React 구조 분해 ===============
const UserCard = ({ name, age, email }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{age}세</p>
      <p>{email}</p>
    </div>
  );
};

// React Hooks를 사용할 때
const [count, setCount] = useState(0);

//============ 연습문제 ===============
// 1. 구조 분해 할당 사용하기
const person = { name: "홍길동", age: 30, city: "서울" };

// name과 city만 꺼내보세요
const { name, city } = person;

console.log(name); //홍길동
console.log(city); //서울

//=====================================

// 2. 객체를 인자로 받아, 구조분해할당으로 name과 age만 출력하는 화살표 함수를 작성하세요. 템플릿 리터럴을 사용하여 출력하세요.
const user = { name: "Tom", age: 20, city: "Seoul" };

// 여기에 함수 작성
const printUser = ({ name, age }) => {
  console.log(`이름: ${name}, 나이:${age}`);
};

printUser(user);
// 출력: "이름: Tom, 나이: 20"

//=====================================

// 3. 배열을 인자로 받아, 첫 번째와 두 번째 값을 구조분해로 받아 합을 반환하는 함수

const arr = [3, 7, 10];

const sumFirstTwo = ([first, second]) => {
  console.log(first + second);
};

sumFirstTwo(arr);
// 함수 호출 예시: sumFirstTwo(arr);
// 결과: 10
