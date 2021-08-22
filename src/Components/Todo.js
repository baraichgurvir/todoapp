import React from 'react'

const Todo = ({ todo, HandelTodoChageStatus, DeleteTodo }) => {
   const ToogleTodo = () => {
      HandelTodoChageStatus(todo.id);
   }

   const DeleteClickedTodo = () => { 
      DeleteTodo(todo.id);
   }

   return (
      <li className="todo-listItem">
         <div className="todo-listItem-mainApp">{todo.name}</div>
         <button className="todo-listItem-checkbox-check" onClick={ToogleTodo}><i className={todo.checkIcon}></i></button>
         <button className="todo-listItem-checkbox-times" onClick={DeleteClickedTodo}><i className="fas fa-times"></i></button>
      </li>
   )
}

export default Todo;
