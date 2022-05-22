import React from "react";

const TodoCounter = ({todos}) => {
  

    return(
        // gelen todo arrayini filter ile dönerek tamamlanan ve tamamlanmayan todoların sayısını counter componenti ile gösterdim
        <div className="todoCounter">
            <span className="completedCounter">{(todos.filter(todo=> todo.completed)).length === 0 ? "Henüz tamamlanan todo yok" : (todos.filter(todo=> todo.completed)).length + " Adet tamamlandı"} </span>  <span className="unCompletedCounter">{(todos.filter(todo=> !todo.completed)).length === 0 ? "Tebrikler hepsi tamamlandı" : (todos.filter(todo=> !todo.completed)).length + " Adet tamamlanmadı" }  </span>
          
        </div>
    )
}


export default TodoCounter;