import uuid from 'uuid/v4';
import React from 'react';

class ExpenseForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            id: uuid(),
            name: '',
            amount: 0
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleNewExpense = this.handleNewExpense.bind(this);
    }
    
    handleChange(e) {
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleNewExpense(e) {
        e.preventDefault();
        this.props.handler(this.state);
    }
    
    
    render() {
        
        return (
            <form id="expense-form" onSubmit={this.handleNewExpense}>
                <input className="item" placeholder="Expense Item" type="text" name="name" onChange={this.handleChange} />
                <input className="amount" placeholder="Amount" type="number" name="amount" onChange={this.handleChange} />
                <button type="submit">Add Expense</button>
            </form>
        )
        
    }
    
    
}

export default ExpenseForm;