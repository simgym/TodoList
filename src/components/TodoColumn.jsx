import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import "./TodoColumn.css";

// tasks entered are displayed here

const TodoColumn = () => {
  const todoItems = useSelector((state) => state.todos.todoItems);

  return (
    <div className="todo-column">
      <h2>TASK LEFT</h2>
      <ul>
        {todoItems.map((item, index) => (
          <TodoItem key={index} index={index} text={item} />
        ))}
      </ul>
    </div>
  );
};

export default TodoColumn;
