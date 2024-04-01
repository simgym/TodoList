import React from "react";
import TodoColumn from "./TodoColumn";
import DoneColumn from "./DoneColumn";
import TodoInput from "./TodoInput";
import "./TodoList.css";

// this component includes structure of website , the input and both lists

const TodoList = () => {
  return (
    <>
      <TodoInput />
      <div className="todo-list-container">
        <TodoColumn />
        <DoneColumn />
      </div>
    </>
  );
};

export default TodoList;
