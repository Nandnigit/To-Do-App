import { useState } from "react";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Task1", status: "Active" },
    { id: 1, task: "Task2", status: "Active" },
    { id: 2, task: "Task3", status: "Active" },
    { id: 3, task: "Task4", status: "Active" },
    ]);

  const addTodo = (data) => {
    setTodos( [ ...todos, data={...data, id:parseInt(todos[todos.length-1].id) + 1, status:"Active"}] )
    console.log(data)
  }

  const delTodo = (id) => {
    setTodos(todos.filter( todo => todo.id != id ))
  }

  const updateTodo = (e, id, text) => {
    e.preventDefault()
    const todo = todos[id]
    const updatedUser = { ...todo, task:text, status:"Active" }
    setTodos(todos.map(t => t.id == todo.id ? updatedUser : t))

  }

  const completeTodo = (e, id) => {

    if(e.target.checked){
      console.log("okay")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Completed"}: todo))
    }
    else
    {
      console.log()
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Active"}: todo))
    }

   
  }

  const filterTodo = (cat_value) => {
    setTodos(todos.filter((todo) => todo.status == cat_value))
  }


  return (
    <div className="todo-container">
      <Search addTodo = { addTodo } />
      <Filter filter_todo = { filterTodo }/>
      <TodoList todos = { todos } delTodo = { delTodo } update_todo = { updateTodo } complete_todo = { completeTodo } filter_todo = { filterTodo } />
    </div>
  );
}



export default App;
