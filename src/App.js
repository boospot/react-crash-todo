import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Header from './comonents/layout/Header';
import Todos from "./comonents/Todos";
import AddTodo from "./comonents/AddTodo";
import About from "./comonents/pages/About";

class App extends React.Component {
    state = {
        todos: [
            {
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            },
            {
                "userId": 1,
                "id": 4,
                "title": "et porro tempora",
                "completed": true
            },
            {
                "userId": 1,
                "id": 5,
                "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
                "completed": false
            }
        ]
    }

    getContainerStyle = {
        maxWidth: '500px',
        margin: '0 auto',
        padding: "2em"
    }

    toggleTodo = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    addTodo = (title) => {

        const todo = {
            userId: 1,
            id: Math.floor(Math.random() * Math.floor(99999)),
            title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, todo]
        })
    }

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos].filter(todo => todo.id !== id)
        })
    }

    render() {
        return (
            <Router>
                <Header/>
                <div style={this.getContainerStyle} className="App">
                    <Route exact path="/" render={(props) => (
                        <React.Fragment>
                            <AddTodo addTodo={this.addTodo}/>
                            <Todos todos={this.state.todos} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo}/>
                        </React.Fragment>
                    )}/>
                    <Route path={"/about"} component={About}/>
                </div>
            </Router>
        )
    }


}


export default App;
