import React from 'react';

function App() {
  // 기본적으로 const 사용. 변경해야 할 때 let 쓰기.
  const name = '리액트';
  return (
    <>
      <h1>{name} 안녕!</h1>
      <h2>잘 작동하니?</h2>
    </>
  );
}

export default App;
