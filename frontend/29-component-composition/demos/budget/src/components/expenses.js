import React from 'react';

import ExpenseForm from './expense-form';
import ExpensesList from './expenses-list';
import BudgetSummary from './budget-summary';
import Modal from './modal';
import {renderIf} from '../lib/__.js';

class Expenses extends React.Component {
    
    constructor(props) { 
        super(props);
        
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
        );
        
    }
    
    closeModal() {
        let showErrors = false;
        this.props.app.setState({showErrors});
    }
    

    handleNewBudget(budget) {
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
            
                <BudgetSummary handler={this.handleNewBudget} app={this.props.app} />
           
                <div id="expensesWrapper">
                
                    <h2>Expenses</h2>
                    
                    {
                        renderIf(
                            remainingBudget,
                            <ExpenseForm handler={this.handleNewExpense}/> 
                        )
                    }
                    
                    <ExpensesList app={this.props.app} />
                    
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
        );
            
    }
    
}

export default Expenses;