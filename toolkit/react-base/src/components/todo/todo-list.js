import React from 'react';

import TodoItem from './todo-item';

class TodoList extends React.Component {

    render() {

        return (
            <ul>
                {
                    this.props.todoList.map( (todo,i) =>
                        <TodoItem key={todo.id} item={todo} deleteHandler={this.props.deleteHandler} updateHandler={this.props.updateHandler} />
                    )
                }
            </ul>
        )

    }

}

export default TodoList;