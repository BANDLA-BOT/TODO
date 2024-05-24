import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ZoomControls from "./components/ZoomControls";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), date: selectedDate }]);
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === id ? updatedTodo : todo)));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    return (
      (filter === "all" ||
        (filter === "completed" && todo.completed) ||
        (filter === "pending" && !todo.completed)) &&
      todo.text.toLowerCase().includes(search.toLowerCase()) &&
      todo.date.toDateString() === selectedDate.toDateString()
    );
  });

  return (
    <>
      <div>
        <ZoomControls />
      </div>
      <div className="main">
       
          {/* middle component */}

          <div className="search-filter-main">
            <div>
              <h1>Todo</h1>
              <hr  className="todo-hr"/>
              <TodoForm addTodo={addTodo} />

              <div className="search-filter">
              <input
              className="search"
                type="text"
                placeholder="Search Todos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <select
              className="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
              </select>
              </div>
            </div>
            <div className="list-items
            ">
              <TodoList
                todos={filteredTodos}
                updateTodo={updateTodo}
                deleteTodo={deleteTodo}
              />
            </div>
          </div>

    

         {/* date picker */}


      </div>
        <div className="date">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          className="date-picker"
        />
        </div>
    </>
  );
};

export default App;
