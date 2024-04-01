import { createSlice, configureStore } from "@reduxjs/toolkit";

/* 
i have implemented main functionality of redux in this component
also both lists are place in local storage from here
*/

/*
these states initially store the tasks left and tasks done array from local storage
but if they are empty it will store empty array initially
*/

const initialTodoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
const initialDoneItems = JSON.parse(localStorage.getItem("doneItems")) || [];

const initialState = {
  todoItems: initialTodoItems,
  doneItems: initialDoneItems,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoItems.push(action.payload);
      localStorage.setItem("todoItems", JSON.stringify(state.todoItems));
    },
    deleteTodo(state, action) {
      const deletedItem = state.todoItems[action.payload];
      state.todoItems = state.todoItems.filter((_, i) => i !== action.payload);
      state.doneItems.push(deletedItem);
      localStorage.setItem("todoItems", JSON.stringify(state.todoItems));
      localStorage.setItem("doneItems", JSON.stringify(state.doneItems));
    },
    editTodo(state, action) {
      const { index, newText } = action.payload;
      state.todoItems[index] = newText;
      localStorage.setItem("todoItems", JSON.stringify(state.todoItems));
    },
  },
});

export const todoAction = todosSlice.actions;

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
