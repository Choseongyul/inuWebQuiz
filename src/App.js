import React, { useState } from 'react';

function App() {
  // 상태를 저장할 useState 훅 사용
  const [data, setData] = useState(null);

  // 데이터 받아오기
  const fetchData = async () => {
    try {
      // fetch로 데이터 요청
      const response = await fetch('http://incheon/web');
      const jsonData = await response.json();

      // 로컬 스토리지에 데이터 저장
      localStorage.setItem('web', JSON.stringify(jsonData));

      // 상태 업데이트
      setData(jsonData);
    }
    catch (error) {
      console.error('Error fetching data:', error); //fetch 실패하면 콘솔에 에러 메세지
    }
  };

  return (
    <div>
      <button onClick={fetchData}>INU</button>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'fetch 실패'}
      </div>
    </div>
  );
}

export default App;
