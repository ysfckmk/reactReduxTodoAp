import React from "react";
import RemovePNG from "../assets/icons/remove.png";
import CheckedPNG from "../assets/icons/checked.png";
import UnCheckedPNG from "../assets/icons/unchecked.png";
import { useDispatch } from "react-redux";
import {
  updateCompleted,
  deleteTodo,
  saveToLocalStorage,
} from "../store/todoSlice";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteHandler = () => {
  
    dispatch(deleteTodo(todo.id));
    dispatch(saveToLocalStorage());
  };

  const completeHander = () => {
    dispatch(updateCompleted(todo.id));
    dispatch(saveToLocalStorage());
  };
  return (
    <div className="todo">
      {/* listin classina tek satir if yazarak eger completed true ise completed classini eklemesini sagladim */}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={completeHander} className="complete-btn">
        {/* comlete durumuna göre butonu dinamik hale getirdim */}
        <img
          src={` ${todo.completed ? CheckedPNG : UnCheckedPNG}`}
          className="imgButtons"
          alt="Complete"
        />

        {/* silme işlemi için butonun onClick özelliğine silme fonksiyonunu bağladım */}
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <img src={RemovePNG} alt="Remove" className="imgButtons" />
      </button>
    </div>
  );
};

export default Todo;
