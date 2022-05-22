import React, { useState } from "react";
import AddPng from "../assets/icons/add.png";
import { addTodo, saveToLocalStorage } from "../store/todoSlice";
import { useDispatch } from "react-redux";
const Form = () => {
  const [localInputText, setLocalInputText] = useState("");
  const dispatch = useDispatch();

  const inputTextHandler = (e) => {
    setLocalInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
   
    e.preventDefault();
    if (localInputText !== "")
      if (localInputText !== "") {
        dispatch(addTodo(localInputText));
        dispatch(saveToLocalStorage());
        setLocalInputText("");
      }
  };
  return (
    <form>
     
      <input
        value={localInputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        placeholder="Bir todo ekle..."
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <img src={AddPng} className="addButton" alt="Todo ekle" />
      </button>
    </form>
  );
};

export default Form;
