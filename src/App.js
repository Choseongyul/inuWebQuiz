import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function fetchWeb() { //비동기 함수선언
    try {
      const response = await fetch("http://localhost:3002/web"); // db.json에서 원하는 값 fetch하기
      const result = await response.json(); // result변수에 json으로 변환한 값을 저장

      localStorage.setItem("web", JSON.stringify(result)); //로컬스토리지에 저장
      const storedData = JSON.parse(localStorage.getItem("web")); //저장된 값 불러오기

      setData(Array.isArray(storedData) ? storedData : []);
    }
    catch(err) {
      console.error("fetch실패", err); //fetch 실패 예외처리
    }
  }

  return (
    <div className="App">
      <button onClick={fetchWeb}>INU</button> {/* 버튼 */}
    
      <div>
        {data.map((item, index) => (<p key={index}>{item.class}</p>))} {/* p태그로 출력 */}
      </div>
    </div>
  );
}
export default App;