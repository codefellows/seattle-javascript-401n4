import React from 'react';
import {connect} from 'react-redux';

import TodoForm from './todo-form';
import TodoList from './todo-list';

import {todoCreate,todoDelete,todoUpdate} from '../../app/actions';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                <TodoForm handler={this.props.todoCreate} />
                <TodoList todoList={this.props.todoList} updateHandler={this.props.todoUpdate} deleteHandler={this.props.todoDelete} />
            </div>
        )

    }

}

// Takes the current state and maps it to props.todoList (or whatever)
const mapStateToProps = state => {
	return {
		todoList: state
	}
}

// map these dispatch actions back to props.todoCreate (or whatever)
const mapDispatchToProps = (dispatch, getState) => {
	return {
		todoCreate: todoItem => dispatch(todoCreate(todoItem)),
        todoUpdate: todoItem => dispatch(todoUpdate(todoItem)),
        todoDelete: todoItem => dispatch(todoDelete(todoItem))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo, TodoList)