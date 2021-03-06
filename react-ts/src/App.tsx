import { useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

function App() {
  // Removed Static todo
  // const todoList = [
  //   new Todo("Learn Java"),
  //   new Todo("Learn JavaScript"),
  //   new Todo("Learn more.."),
  // ];

  const [todoList, setTodoList] = useState<Todo[]>([]);
  const addTodoHandler = (newTodo: string) => {
    const newTodoObj = new Todo(newTodo);
    setTodoList((previousTodo) => previousTodo.concat(newTodoObj));
  };

  const deleteTodo = (key: string) => {
    setTodoList(todoList.filter((todo) => todo.id !== key));
  };

  return (
    <div>
      <NewTodo addTodo={addTodoHandler} />
      <TodoList items={todoList} onClickHandler={deleteTodo} />
    </div>
  );
}

export default App;
