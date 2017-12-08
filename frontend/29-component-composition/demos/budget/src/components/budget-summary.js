import React from 'react';

import {renderIf} from '../lib/__.js';

class BudgetSummary extends React.Component {
    
    constructor(props) { 
        super(props);
        this.state = {budget:0};
        this.handleNewBudget = this.handleNewBudget.bind(this);
        this.updateBudgetAmount = this.updateBudgetAmount.bind(this);
    }
    
    updateBudgetAmount(e) {
        let budget = e.target.value; 
        this.setState({budget});
    }
    
    handleNewBudget(e) {
        e.preventDefault();
        this.props.handler(this.state.budget);
    }
    
    render() {
        
        let totalSpent = this.props.app.state.expenses.reduce( (t,expense) => t += parseInt(expense.amount), 0 );
        
        let remainingBudget = this.props.app.state.budget - totalSpent;
        
        return (
           
            <div className="budget">
                <h2>Budget Summary</h2>
                
                <div className="budgetSummary">
                    <h3>Budget: {this.props.app.state.budget}</h3>
                    <h3>Spent: {totalSpent}</h3>
                    <h3>Remaining: {remainingBudget}</h3>
                </div>
                
                <form onSubmit={this.handleNewBudget}>
                    <input onChange={this.updateBudgetAmount} type="number" placeholder="Enter Budget Amount" />
                    <button>Set Budget</button>
                </form>
            </div>
                    
        );
            
    }
    
}

export default BudgetSummary;