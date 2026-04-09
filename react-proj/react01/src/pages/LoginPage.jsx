import React from "react";
import { useState } from "react";
function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="p-10 text-[30px]">
      <h3>Input Control</h3>
      <div>
        <label htmlFor="useId">아이디:</label>
        <input
          name="useId"
          id="useId"
          onChange={(e) => {
            // console.log(e);
            console.log(e.target.value);
            setUserId(e.target.value);
          }}
          value={userId}
        />
        <label htmlFor="password">비밀번호:</label>
        <input
          name="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
            console.log(e.target.value);
          }}
          // value={password}
        />
        {/* {userId} */}
      </div>
    </div>
  );
}

export default LoginPage;
