// state kullanabilmek icin reac useState import ettim
import React from "react";
import "./App.css";

// Componentleri import ettim
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Redux Todo App</h1> <br></br>
      </header>

      <Form />
      <TodoList />
    </div>
  );
}

export default App;
