import React, { useState, useRef, useEffect } from "react";
import TodoList from "./Components/TodoList";
import "./App.css";

function App() {
  const [ todos, setTodos ] = useState([]);
  const AddTodoInput = useRef();
  const FilterRef = useRef();
  var [filters, setFilters] = useState('All');
  var checked = false;

  const HandelSumbit = e => {
    e.preventDefault();
    GetTodo();
  }

  const GetTodo = () => {
    const input = AddTodoInput.current.value;
    if (input !== "") AddTodo(input);

    AddTodoInput.current.value = "";
  }

  const AddTodo = todo => {
    const newTodo = [...todos, { id: Math.floor(Math.random() * 10000), name: todo, checked: false, checkIcon: 'fas fa-check' }];
    setTodos(newTodo);
  }

  const MarkTodoAsChecked = (todoID) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === todoID);

    todo.checked = !todo.checked;
    
    if (todo.checked) todo.checkIcon = "fas fa-history";
    else todo.checkIcon = "fas fa-check";

    setTodos(newTodos);
  }

  useEffect(() => {
    const foundTodos = JSON.parse(window.localStorage.getItem('todos'));
    if (todos) setTodos(foundTodos);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const ClearTodos = () => {
    const newTodos = [];
    setTodos(newTodos);
  }

  const DeleteTodo = (todoID) => {
    const newTodos = todos.filter(todo => { return todo.id !== todoID });
    setTodos(newTodos);
  }

  const CheckFilters = () => {
    setFilters(FilterRef.current.value)
  }

  return (
    <div className="todo-form">
      <form onSubmit={HandelSumbit}>
        <input type="text" placeholder="Add a todo" className="todo-btn todo-input" ref={AddTodoInput}></input>
        <input type="button" className="todo-btn todo-add-btn" onClick={GetTodo} value="Add Todo"></input>
      </form> 
      <div className="todo-options">
        <input type="button" className="todo-btn todo-option todo-clear-btn" onClick={ClearTodos} value="Clear Todo"></input>
        <select ref={FilterRef} className="todo-filter todo-option" onChange={CheckFilters}>
          <option>All</option>
          <option>Uncompleted</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="todo-options-sep">
        <hr className="todo-options-sep-hr" />
      </div>
      <TodoList filterFor={filters} todos={todos} DeleteTodo={DeleteTodo} HandelTodoChageStatus={MarkTodoAsChecked} />      
    </div>
  );
}

export default App;
