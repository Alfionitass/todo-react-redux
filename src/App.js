import React from 'react';
import Todos from './components/Todos';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
