import React, {useState} from 'react';
import classes from './TodoInput.module.css';

const TodoInput = ({ addTodo }) => {
    const [title, setTitle] = useState('')

    return (
        <div className={classes.crtfld}>
            <input
                className={classes.crtinpt}
                type='text'
                onChange={e => setTitle(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && addTodo(title, setTitle)}
                value={title}
                placeholder='Add a task'
            />
        </div>
    );
};

export default TodoInput;