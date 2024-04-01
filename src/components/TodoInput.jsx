import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/TodoStore";
import "./TodoInput.css";

// this component is used to enter tasks

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      dispatch(todoAction.addTodo(newTodo));
      setNewTodo("");
    }
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={newTodo}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button className="add-button" onClick={handleAddTodo}>
        +
      </button>
    </div>
  );
};

export default TodoInput;
