import React from 'react';

import ExpenseForm from './expense-form';
import {renderIf} from '../lib/__.js';

class ExpensesList extends React.Component {
    
    constructor(props) { 
        super(props);
        this.handleNewExpense = this.handleNewExpense.bind(this);
        this.deleteExpenseItem = this.deleteExpenseItem.bind(this);
    }
    
    deleteExpenseItem(e) {
        e.preventDefault();
        
        let id = e.target.dataset['key'];
        
        let currentExpenses = this.props.app.state.expenses;
        let expenses = currentExpenses.filter( (expense,i) => {
            return expense.id !== id;
        });
        
        this.props.app.setState({expenses}); 
        
    }
    
    handleNewExpense(expense) {
        this.props.app.setState( currentState => ({expenses: [...currentState.expenses, expense]}) );
    }
    
    render() {
        
        return (
            <div class="expenses-list">
            
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
                                            <td><a onClick={this.deleteExpenseItem} data-key={expense.id} href="#">x</a></td>
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

        );
            
    }
    
}

export default ExpensesList;