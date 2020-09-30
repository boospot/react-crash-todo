import React, {Component} from 'react';
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
// import App from "../App";

class Todos extends Component {

    render() {
        return (
            this.props.todos.map((todo) => (
                <TodoItem todo={todo} key={todo.id} toggleTodo={this.props.toggleTodo} deleteTodo={this.props.deleteTodo}/>
            ))
        );
    }


}

Todos.propTypes = {
    todos : PropTypes.array.isRequired
}

export default Todos;