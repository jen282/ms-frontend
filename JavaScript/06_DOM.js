const $title = document.getElementById("title");
console.log($title);
//텍스트 내용 가져오기
console.log($title.textContent);
//텍스트 내용 변경하기
$title.textContent = "반갑습니다!";

const $firstDesc = document.querySelector(".desc");
console.log($firstDesc);

const $allDesc = document.querySelectorAll(".desc");
console.log($allDesc);

// 이벤트 연결
const $btn = document.getElementById("btn");
const $result = document.getElementById("result");
console.log($btn);
console.log($result);

let clickCount = 0;

$btn.addEventListener("click", () => {
  clickCount++;
  $result.textContent = `${clickCount}번 클릭했습니다`;
});

// 글자수 카운트
const $message = document.getElementById("message");
const $textCount = document.getElementById("count");

$message.addEventListener("input", () => {
  $textCount.textContent = $message.value.length;
  if ($message.value.length >= 100) {
    alert("100글자까지만 입력 가능합니다.");
  }
});

//클릭 시 텍스트 강조 스타일 추가
const $text = document.getElementById("text");
const $btn2 = document.getElementById("btn2");
console.log($text);
console.log($btn2);

$btn2.addEventListener("click", () => {
  $text.classList.add("highlight");
});

//다크모드 추가
const themeBtn = document.getElementById("themeBtn");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ 라이트모드";
  } else {
    themeBtn.textContent = "🌙 다크모드";
  }
});

//항목 추가
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
let itemCount = 1;

addBtn.addEventListener("click", function () {
  itemCount++;
  const newItem = document.createElement("li");
  newItem.textContent = `새 항목 ${itemCount}`;
  list.appendChild(newItem);
});
