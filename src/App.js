import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = event => {
    event.preventDefault();
    const newTodoText = event.target.elements.todo.value;
    if (newTodoText) {
      const newTodo = {text: newTodoText, isCompleted: false}
      setTodos(prevTodos => [...prevTodos, newTodo]);
      event.target.reset();
    }
  };
    
  const deleteTodo = index => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index))
  };

  const toggleTodoCompletion = index => {
    setTodos(previousTodos => previousTodos.map((todo, i) => 
      i === index ? {...todo, isCompleted: !todo.isCompleted} : todo
   ))
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
            <input 
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodoCompletion(index)}
            />
            {todo.text}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
