import React from "react";
import classes from "./Todo.module.css";

const Todo: React.FC<{ itemText: string; key: string }> = (props) => {
  return (
    <li className={classes.item} key={props.key}>
      {props.itemText}
    </li>
  );
};

export default Todo;
