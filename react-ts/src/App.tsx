import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import Todo from "./models/Todo";

function App() {
  const todoList = [
    new Todo("Learn Java"),
    new Todo("Learn JavaScript"),
    new Todo("Learn more.."),
  ];
  return (
    <div>
      <NewTodo />
      <TodoList items={todoList} />
    </div>
  );
}

export default App;
