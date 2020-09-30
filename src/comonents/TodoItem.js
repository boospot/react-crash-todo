import React, {Component} from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#f6f6f6',
            display: 'flex',
            justifyContent: 'space-between',
        }
    }

    render() {

        const {title, id, completed} = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input
                        type="checkbox"
                        onChange={this.props.toggleTodo.bind(this, id)}
                        defaultChecked={completed}
                    />
                    <span style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>{title}</span>
                </p>
                <button onClick={this.props.deleteTodo.bind(this, id)}>x</button>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;