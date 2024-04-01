import React from "react";
import { useSelector } from "react-redux";
import "./DoneColumn.css";

// displays the tasks done

const DoneColumn = () => {
  const doneItems = useSelector((state) => state.todos.doneItems);

  return (
    <div className="done-column">
      <h2>TASKS DONE</h2>
      <ul>
        {doneItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default DoneColumn;
