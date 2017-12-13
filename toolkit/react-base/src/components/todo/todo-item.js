import React from 'react';

import TodoForm from './todo-form';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing:false
        }

        this.toggleEditState = this.toggleEditState.bind(this);
    }

    toggleEditState() {
        let editing = ! this.state.editing;
        this.setState({editing});
    }

    render() {

        return (

            <li onDoubleClick={this.toggleEditState}>

                {
                    this.state.editing

                    ?
                        <TodoForm todo={this.props.item} handler={this.props.updateHandler} toggle={this.toggleEditState} />
                    :

                        this.props.item.task

                }

            </li>
        )

    }

}

export default TodoItem;