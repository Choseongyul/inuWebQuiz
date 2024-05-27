import React, { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    //예외처리
    try {
      const response = await fetch("http://localhost:3002/web"); //fetch
      const result = await response.json();

      localStorage.setItem("web", JSON.stringify(result));
      const storedData = JSON.parse(localStorage.getItem("web"));

      setData(Array.isArray(storedData) ? storedData : []);
    }
      
    catch(err) {
      console.error("fetch실패", err);
    }
  }

  return (
    <div className="App">
      <button onClick={fetchData}>INU</button>
    
      <div>
        {data.map((item, index) => (<p key={index}>{item.class}</p>))}
      </div>
    </div>
  );
}

export default App;