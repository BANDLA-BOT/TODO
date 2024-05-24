import  { useState } from 'react';
import { IoMdAdd } from "react-icons/io";
import '../Styles/TodoForm.css'

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo({
        text,
        completed: false,
      });
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='add-form'>
      <input
        className='add-input'
        type="text"
        placeholder="Add a todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit"><IoMdAdd  className='add-icon'/></button>
    </form>
  );
};

export default TodoForm;
