const response = fetch("https://jsonplaceholder.typicode.com/todos");
console.log(response); // Promise { <pending> }

// then vs catch

const result = fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    // 서버가 응답했을 때
    return response.json();
  })
  .then((data) => {
    // JSON 파싱이 완료되었을 때
    console.log(data.title);
  })
  .catch((error) => {
    // 어디서든 에러가 발생했을 때
    console.error("실패:", error.message);
  });
console.log(result);

//async-await
async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");

    if (!response.ok) {
      throw new Error("HTTP 오류! 상태: ${response.status}");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  } finally {
    console.log("end");
  }
}
getData();
console.log("Hello");
