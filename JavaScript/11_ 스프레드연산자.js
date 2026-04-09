//=========== 배열 ================

let original = [1, 2, 3];
let copied_spread = [...original];
let copied_copy = original; // 같은 배열을 가리키는 참조. 원본 배열도 수정되는 문제 발생

original.push(4);
console.log(original);
console.log(copied_spread);
console.log(copied_copy);

//배열 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined);
const newArr = [...combined, 7, 8, 9];
console.log(newArr);

//=========객체 스프레드===========

//속성 복사
const original2 = { name: "홍길동", age: 25 };
const copied2 = { ...original2 };
console.log(copied2);

//속성 합치기
const info = { name: "홍길동" };
const details = { age: 25, city: "서울" };

const merged = { ...info, ...details };
const merged2 = { ...merged, phone: "010-123-4567" };
console.log(merged2);

// 속성 변경/추가
const updated = { ...merged2, city: "부산" };
console.log(updated);

// React에서 상태 업데이트 적용

//========= 연습문제 ===========
const [user, setUser] = useState({
  name: "김철수",
  email: "old@example.com",
  phone: "010-1234-5678",
});

const handleEmailChange = (newEmail) => {
  // 여기에 코드를 작성하세요
  // name과 phone은 유지하고 email만 newEmail로 변경
  setUser({ ...user, email: newEmail });
};

console.log(user);
