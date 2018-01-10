import React from 'react';

import ExpenseForm from '../expense-form'
import Modal from '../modal'
import {renderIf} from '../../lib/__.js'

class Expenses extends React.Component {
    
    constructor(props) { 
        super(props);
        
        this.state = {budget:0};
        
        this.handleNewBudget = this.handleNewBudget.bind(this);
        this.handleNewExpense = this.handleNewExpense.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.deleteExpenseItem = this.deleteExpenseItem.bind(this);
    }
    
    componentDidMount() {
        console.log("__E_STATE__", this.state);
    }
    
    deleteExpenseItem(e) {
        e.preventDefault();
        
        let id = e.target.dataset['key'];
        
        this.props.app.setState( 
            currentState => 
                ( {expenses: currentState.expenses.filter( (expense,i) => {
                    return expense.id !== id;
                })}
            )
        )
        
    }
    
    closeModal() {
        let showErrors = false;
        this.props.app.setState({showErrors})
    }
    

    handleNewBudget(e) {
        e.preventDefault();
        let budget = e.target.querySelector('input[name=budget]').value;
        this.props.app.setState({budget});
        // this.props.handler(budget);
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
                
                {
                    renderIf(
                        (remainingBudget < 0 && this.props.app.state.showErrors),
                        <Modal close={this.closeModal}>
                            <p>Whoa, Sailor!</p>
                            <p>You are spending way too much</p>
                        </Modal>
                            
                    )
                }
                    
           </div>
        )
            
    }
    
}

export default Expenses;