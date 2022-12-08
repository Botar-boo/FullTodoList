import React from 'react';
import Check from "../Check/Check";
import classes from "./TodoItem.module.css"
import Trash from "../Trash/Trash";

const TodoItem = ({todo, changeTodo, removeTodo}) => {

    return (
        <div className={classes.todoitm} >
            <Check todo={todo} changeTodo={changeTodo}/>
            <div className={classes.todotask}>
                <div className={classes.todotxt}>
                    {todo.isDone ?
                        <del>{todo.text}</del> :
                        todo.text
                    }
                </div>
            </div>
            <Trash todo={todo} removeTodo={removeTodo}/>
        </div>
    );
};

export default TodoItem;