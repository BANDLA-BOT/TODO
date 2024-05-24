import { useState } from "react";
import "../Styles/TodoItem.css";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, text });
    setIsEditing(false);
  };

  return (
    <div className="items">
      <div className="lists">
        <li>
          {isEditing ? (
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onBlur={handleUpdate}
            />
          ) : (
            <span
              onDoubleClick={() => setIsEditing(true)}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
          )}
        </li>
      </div>

      <div className="list-btns">
      <button
        onClick={() =>
          updateTodo(todo.id, { ...todo, completed: !todo.completed })
        }
      >
        {todo.completed ? "Unmark" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
