import React, { useState } from 'react';
import './App.css';

interface ITodos {
  text: string;
  complete: boolean;
}

function App() {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodos[]>([]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    addTodos(value);
    setValue('');
  };

  const addTodos = (text: string): void => {
    const newTodos: ITodos[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodos[] = [...todos];
    newTodos[index].complete = !newTodos[index].complete;
    setTodos(newTodos);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodos[] = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          required
          type="text"
        />
        <button type="submit">Add todo</button>
      </form>
      <ul>
        {todos.map((todo: ITodos, index: number) => (
          <li
            style={{ textDecoration: todo.complete ? 'line-through' : '' }}
            key={index}
          >
            {todo.text}
            <button type="button" onClick={() => completeTodo(index)}>
              {todo.complete ? 'incomplete' : 'complete'}
            </button>
            <button type="button" onClick={() => removeTodo(index)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
