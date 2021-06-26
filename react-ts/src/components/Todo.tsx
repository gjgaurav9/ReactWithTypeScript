import React from "react";

const Todo : React.FC<{itemText: string, key: string}> = (props) => {
    return(
        <li key={props.key}>{props.itemText}</li>
    )
}

export default Todo;