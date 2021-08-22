import React from 'react'
import Todo from './Todo';

const TodoList = ({ todos, HandelTodoChageStatus, DeleteTodo, filterFor }) => {

   return (
      <ol className="todo-list">
         {todos.map(todo => { 
            if (filterFor === "All") return <Todo key={todo.id} todo={todo} DeleteTodo={DeleteTodo} HandelTodoChageStatus={HandelTodoChageStatus} />
            if (filterFor === "Uncompleted") if (!todo.checked) return <Todo key={todo.id} todo={todo} DeleteTodo={DeleteTodo} HandelTodoChageStatus={HandelTodoChageStatus} />
            if (filterFor === "Completed") if (todo.checked) return <Todo key={todo.id} todo={todo} DeleteTodo={DeleteTodo} HandelTodoChageStatus={HandelTodoChageStatus} />
         })}
      </ol>
   )
}

export default TodoList;
