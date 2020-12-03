import React from 'react';
import { Provider } from "react-redux";
import store from "./redux/store/index";
import TodoApp from "./components/TodoApp";
// import Todos from './components/Todos';
// import Header from './components/Header';
import './App.css';

function App() {
  return (
    <Provider store= {store}>
      <div className="App">
        <TodoApp />
        {/* <Header />
        <Todos /> */}
      </div>
    </Provider>
    
  );
}

export default App;
