import React, { useEffect } from "react";
// Todo componentini import ettim
import Todo from "./Todo";
import TodoCounter from "./TodoCounter";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage } from "../store/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocalStorage());
  }, []);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {/* todo arrayi bos ise ekranda listeniz bos uyarisi verdirdim */}
        {todos.length == 0 ? (
          <div className="emptyList">Henüz Bir Todo Eklemediniz</div>
        ) : (
          <TodoCounter todos={todos} />
        )}

        {/* todos arrayini map ile donerek her objeyi todo olarak todo componentine gonderdim ve key parametresine idyi verdim */}
        {todos.map((todo) => (
          <Todo todos={todos} key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
