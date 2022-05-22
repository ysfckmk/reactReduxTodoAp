import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        text: action.payload,
        completed: false,
        id: Math.random() * 10000,
      });
    },
    updateCompleted: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed,
          };
        } else {
          return item;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((el) => el.id !== action.payload);
    },
    saveToLocalStorage: (state) => {
      localStorage.setItem("todos", JSON.stringify(state.value));
    },
    getLocalStorage: (state) => {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"));
        state.value = todoLocal;
      }
    },
  },
});

export const {
  addTodo,
  updateCompleted,
  deleteTodo,
  saveToLocalStorage,
  getLocalStorage,
} = todoSlice.actions;

export default todoSlice.reducer;
