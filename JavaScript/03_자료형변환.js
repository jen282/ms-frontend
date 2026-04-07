// 명시적 자료형변환
//====================
// 문자
const a = String(100);
console.log(typeof a);

const b = String([1, 2, 3]);
console.log(b, typeof b);

const e = String({ name: "홍길동" });
console.log(e, typeof e);
// [object Object] string

const c = Number("abc");
console.log(c); //NaN
//====================
//숫자
const d = Number("abc100");
console.log(d); //NaN
// Number()는 숫자가 아닌 문자가 섞이면 NaN

const f = 123.45;
console.log(parseInt(f));
console.log(parseFloat(f));

const g = "100원";
console.log(parseInt(g));
//====================
//불리언
console.log(Boolean("")); //빈 문자열 = False

console.log(Boolean([])); //빈 배열 = true
console.log(Boolean({})); //빈 객체 - true
console.log(Boolean("false")); // "false"문자열 = true
console.log(Boolean(-1)); // -1 - true
//====================

//====================
// 암묵적 자료형변환

// + 연산자를 문자열과 함께 사용할 때 → 문자열 타입으로 변환
console.log("10" + 5); // 105
console.log("10" + undefined); // 10undefined
console.log("10" + null); // 10null
console.log("10" + true); //10true

// + 이외의 산술연산자를 문자열과 함께 사용할 때 → 숫자 타입으로 변환
console.log("10" * 5); // 50
console.log("10" * undefined); // NaN
console.log("10" * null); // 0
console.log("10" * true); // 10

//형변환을 명시적으로 해주기
