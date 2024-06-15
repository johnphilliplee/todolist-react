import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = event => {
    event.preventDefault();
    const newTodo = event.target.elements.todo.value;
    if (newTodo) {
      setTodos(prevTodos => [...prevTodos, newTodo]);
      event.target.reset();
    }
  };
    
  const deleteTodo = index => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index))
  };

  return (
    <div>
      <h1> Todo List</h1>
      <form onSubmit={addTodo}>
        <input name="todo" type="text" placeholder="Add new todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
