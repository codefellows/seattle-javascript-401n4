import React from 'react';
import {connect} from 'react-redux';

import TodoForm from './todo-form';
import TodoList from './todo-list';
import Auth from '../auth';

import * as actions from './actions';

class Todo extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("INIT");
        this.props.todoInitialize();
    }

    render() {

        return (
            <Auth>
                <TodoForm handler={this.props.todoCreate} />
                <TodoList todoList={this.props.todoList} updateHandler={this.props.todoUpdate} deleteHandler={this.props.todoDelete} />
            </Auth>
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