import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../store/TodoStore";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDownloadDone } from "react-icons/md";
import { MdDone } from "react-icons/md";
import "./TodoItem.css";

// in this component i have added functionality to edit & remove tasks

const TodoItem = ({ index, text }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDelete = () => {
    dispatch(todoAction.deleteTodo(index));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(todoAction.editTodo({ index, newText: editedText }));
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setEditedText(event.target.value);
  };

  return (
    <li className="todo-item">
      {isEditing ? (
        <>
          <input type="text" value={editedText} onChange={handleChange} />
          <button onClick={handleSaveEdit} className="edit-button">
            <MdDone />
          </button>
        </>
      ) : (
        <>
          <span>{text}</span>
          <span className="tasks-button">
            <button onClick={handleDelete}>
              <MdDownloadDone />
            </button>
            <button onClick={handleEdit}>
              <AiOutlineEdit />
            </button>
          </span>
        </>
      )}
    </li>
  );
};

export default TodoItem;
