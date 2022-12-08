import React from 'react';
import {BsTrash} from "react-icons/bs";
import classes from "./Trash.module.css"


const Trash = ({todo, removeTodo}) => {
    return (
        <button className={classes.trshbox} onClick={() => removeTodo(todo.id)}>
            <object><BsTrash size={20} /></object>
        </button>
    );
};

export default Trash;