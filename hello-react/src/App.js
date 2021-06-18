import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    // 카멜표기법
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16, // px
  };
  return <div style={style}>{name}</div>;
}

export default App;
