import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const todoClick = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const inputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const newTodos = [...todos, { text: newTodo, completed: false }];
      setTodos(newTodos);
      setNewTodo("");
    }
  };

  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => todoClick(index)}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed ? "line-through" : "none",
              color: todo.completed ? "green" : "orange",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={newTodo}
          onChange={inputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
