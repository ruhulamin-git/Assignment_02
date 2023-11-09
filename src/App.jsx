import { useState } from "react";
import TodoInput from "./Componants/TodoInput";
import TodoList from "./Componants/TodoList";


const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="container my-5 justify-center">
      <div className="row-auto w-full grid gap-5">
        <h1 className="mx-auto mt-10 max-w-md text-3xl font-bold justify-center items-center">React Todo App</h1>
        <TodoList list={todos} remove={deleteTodo} />
        <TodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />

      </div>
    </div>
  );
};

export default App;