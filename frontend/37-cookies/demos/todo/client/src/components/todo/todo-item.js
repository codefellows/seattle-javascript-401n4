import React from 'react';

import TodoForm from './todo-form';

import {activeProps} from '../../lib/__';

class TodoItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing:false
        }

        this.toggleEditState = this.toggleEditState.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleEditState() {
        let editing = ! this.state.editing;
        this.setState({editing});
    }

    toggleDone() {

        let task = Object.assign({}, this.props.item);
            task.complete = ! task.complete;

        this.props.updateHandler( task );

    }

    render() {

        let config = {
            complete: this.props.item.complete
        };

        let classes = activeProps(config).join(' ');

        return (

            <li className={classes} onClick={this.toggleDone} onDoubleClick={this.toggleEditState}>

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