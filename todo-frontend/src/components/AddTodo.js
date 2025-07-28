import React, { useState } from 'react';

const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="add-todo-input"
      />
      <button type="submit" className="add-todo-button">
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;