import React from 'react';

import ExpenseForm from '../expense-form'
import {renderIf} from '../../lib/__.js'

class Expenses extends React.Component {
    
    constructor(props) { 
        super(props);
        
        this.handleNewBudget = this.handleNewBudget.bind(this);
        this.handleNewExpense = this.handleNewExpense.bind(this);
    }
    
    handleNewBudget(e) {
        e.preventDefault();
        let budget = e.target.querySelector('input[name=budget]').value;
        this.props.app.setState({budget});
    }
    
    handleNewExpense(expense) {
        this.props.app.setState( currentState => ({expenses: [...currentState.expenses, expense]}) );
    }
    
    render() {
        
        let totalSpent = this.props.app.state.expenses.reduce( (t,expense) => t += parseInt(expense.amount), 0 );
        
        let remainingBudget = this.props.app.state.budget - totalSpent;
        
        return (
           <div id="budgetWrapper">
           
                <div>
                    <h2>Budget Summary</h2>
                    <h3>Budget: {this.props.app.state.budget}</h3>
                    <h3>Spent: {totalSpent}</h3>
                    <h3>Remaining: {remainingBudget}</h3>
                    
                    <form onSubmit={this.handleNewBudget}>
                        <input name='budget' type="number" placeholder="Enter Budget Amount" />
                        <button>Set Budget</button>
                    </form>
                </div>
                
                <div>
                    <h2>Expenses</h2>
                    
                    {
                        renderIf(
                            remainingBudget,
                            <ExpenseForm handler={this.handleNewExpense}/> 
                        )
                    }
                    
                    {   
                        renderIf(
                            this.props.app.state.expenses.length, 
                    
                            <table>
                            
                                <thead>
                                    <tr>
                                        <th colSpan='2'>Expense</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                            
                                    {
                                        this.props.app.state.expenses.map( (expense,i) =>
                                            <tr key={expense.id}>
                                                <td><a href="#">x</a></td>
                                                <td>{expense.name}</td>
                                                <td>{expense.amount}</td>
                                            </tr>
                                        )
                                    }
                            
                                </tbody>
                                
                            </table>

                        )
                    }
                    
                </div>
           </div>
        )
            
    }
    
}

export default Expenses;