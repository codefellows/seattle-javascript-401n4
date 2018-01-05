import React from 'react';

import TodoItem from './todo-item';

class TodoList extends React.Component {

    render() {

        return (
            <ul className="todo">
                {
                    this.props.todoList.map( (todo,i) =>
                        <TodoItem key={todo._id} item={todo} deleteHandler={this.props.deleteHandler} updateHandler={this.props.updateHandler} />
                    )
                }
            </ul>
        )

    }

}

export default TodoList;