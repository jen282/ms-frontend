import React from "react";
import { Clock10 } from "lucide-react";

function Practice() {
  const name = "김철수";
  const age = 25;
  const userInfo = {
    age: 20,
    school: "한국대학교",
    hobby: ["운동", "독서", "글쓰기"],
    isMember: false,
  };
  return (
    <>
      <h1>안녕하세요 {name}님</h1>
      <p>{age}살이시군요</p>
      <p>취미는 {userInfo.hobby}입니다.</p>
      <br />
      {/* 삼항연산자 */}
      <p>{userInfo.isMember ? "회원" : "비회원"}</p>
      {/* 단축표현식 */}
      {userInfo.isMember || <button>회원가입</button>}
      <br />
      <h3>취미</h3>
      <ul>
        {userInfo.hobby.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <br />
      <div className="bg-[#f3f3f3] w-100 p-4 rounded-lg"></div>
      <br />
      <Clock10 />
    </>
  );
}

export default Practice;
