import React from "react";
import TodoModel from "../models/Todo";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList: React.FC<{
  items: TodoModel[];
  onClickHandler: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <Todo
          key={item.id}
          itemText={item.text}
          onClick={props.onClickHandler.bind(null, item.id)}
        ></Todo>
      ))}
    </ul>
  );
};

export default TodoList;
