import React from 'react';
import {BsCheck} from "react-icons/bs";
import classes from "./Check.module.css"


const Check = ({todo, changeTodo}) => {
    return (
        <button className={classes.chckbox} onClick={() => changeTodo(todo.id)}>
            {todo.isDone &&
            <object><BsCheck size={20} /></object>}
        </button>
    );
};

export default Check;