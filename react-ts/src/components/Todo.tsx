import React from "react";
import classes from "./Todo.module.css";

const Todo: React.FC<{ itemText: string; key: string; onClick: () => void }> = (
  props
) => {
  return (
    <li className={classes.item} onClick={props.onClick} key={props.key}>
      {props.itemText}
    </li>
  );
};

export default Todo;
