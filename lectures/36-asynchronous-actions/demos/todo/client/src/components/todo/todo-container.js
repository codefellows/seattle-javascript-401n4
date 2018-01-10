import React from 'react';
import {connect} from 'react-redux';

import TodoForm from './todo-form';
import TodoList from './todo-list';

import * as actions from './actions';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.todoInitialize();
    }

    render() {

        return (
            <React.Fragment>
                <TodoForm handler={this.props.todoCreate} />
                <TodoList todoList={this.props.todoList} updateHandler={this.props.todoUpdate} deleteHandler={this.props.todoDelete} />
            </React.Fragment>
        )

    }

}

// Takes the current state and maps it to props.todoList (or whatever)
const mapStateToProps = (state) => {
	return {
		todoList: state.todo
	}
}

// map these dispatch actions back to props.todoCreate (or whatever)
const mapDispatchToProps = (dispatch, getState) => {
	return {
		todoCreate: todoItem => dispatch(actions.todoCreate(todoItem)),
        todoUpdate: todoItem => dispatch(actions.todoUpdate(todoItem)),
        todoDelete: todoItem => dispatch(actions.todoDelete(todoItem)),
        todoInitialize: () => dispatch(actions.todoInitialize()),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo, TodoList)