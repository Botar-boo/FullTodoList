import React from 'react';
import TodoItem from "./item/TodoItem/TodoItem";
import logo from '../../assets/main-check.png';
import classes from './Home.module.css'
import MyNavLink from "../../components/MyNavLink/MyNavLink";
import TodoInput from "./item/TodoInput/TodoInput";
import { baseUrl } from '../../App';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
        };
    }
    
    componentDidMount() {
        this.getTasks()
    }

    getTasks() {
        fetch(baseUrl + 'get_all').then(res => res.json()).then(data => 
            this.setState({ todos: data.reverse() })
        )
    }

    addTodo = (title, setTitle) => {
        const id = new Date().valueOf()
        fetch(baseUrl + 'create/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ id: id, text: title, isDone: false })
            })
        this.setState({
            todos: [
                {
                    id: id,
                    text: title,
                    isDone: false,
                },
                ...this.state.todos,
            ]
        })
        setTitle('')
    }

    changeTodo = (id) => {
        const cp = [...this.state.todos]
        const cur = cp.find(t => t.id === id)
        fetch(baseUrl + 'do/' + id,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({ isDone: !cur.isDone })
            })
        cur.isDone = !cur.isDone
        this.setState({ todos: cp })
    }

    removeTodo = id => {
        fetch(baseUrl + 'delete/' + id,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
        this.setState({ todos: ([...this.state.todos].filter(t => t.id !== id)) })
    }

    render() {
        return (
            <div>
                <header className={classes.title}>
                    <img src={logo} />
                    <h1>To-do List</h1>
                </header>
                <div className={classes.signin}>
                    <MyNavLink role="button" to="/sign-in">
                        Sign in
                    </MyNavLink>
                </div>
                <div className={classes.rectangle}>
                    <h2 className={classes.promo}>
                        Plan your work and life easily. <br />
                        Never been so convenient and simple!
                    </h2>
                </div>
                <div className={classes.todoblck}>
                    {this.state.todos.map(todo => (
                        <TodoItem key={todo.id} todo={todo} changeTodo={this.changeTodo} removeTodo={this.removeTodo} />
                    ))}
                </div>
                <TodoInput addTodo={this.addTodo}/>
                <footer>
                    <hr className={classes.line} />
                    <p className={classes.rights}>
                        &copy; Copyright 2022 by Botar-boo
                    </p>
                </footer>
            </div>
        )
    }
};