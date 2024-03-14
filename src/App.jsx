import React, { useState } from 'react';
import './App.css'

function TodoList() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    } else {
      alert("Iltimos so'z kiriting!");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  return (
    <>
      <h1>To do list</h1>
      <input
        className='inputcha'
        type="text"
        placeholder='Ichiga text yozing'
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAddTodo}>Meni bos</button>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
