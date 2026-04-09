import React, { useEffect, useState } from "react";
function GetData() {
  const [cats, setCats] = useState([]);
  console.log("cats-->", cats);

  useEffect(() => {
    async function getCatData() {
      const response = await fetch(
        "https://api.thecatapi.com/v1/images/search?limit=20",
      );
      const data = await response.json();
      // console.log(data);
      setCats(data);
      //상태를 바꾸면 getCatData를 다시 호출 -> 다시 상태 변경 -> 무한 로딩 => useEffect에 넣어줘야 함
      //상태가 바뀌어도 컴포넌트는 한번만 실행/특정 State 변경 시에만 실행되도록
    }
    getCatData();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className="text-center text-3xl font-bold text-[#e60023] mb-6 tracking-tight">
        Cats
      </h1>
      <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-3">
        {cats.map((cat) => (
          <div key={cat.id} className="break-inside-avoid mb-3 rounded-2xl overflow-hidden cursor-pointer relative group transition-transform duration-200 hover:scale-[1.02]">
            <img src={cat.url} alt="cat" className="w-full h-auto block" />
            <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-2xl flex items-start justify-end p-3">
              <button className="bg-[#e60023] hover:bg-[#ad081b] text-white text-sm font-bold px-4 py-2 rounded-full cursor-pointer">
                Save
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetData;
