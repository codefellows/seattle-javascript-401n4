import React from 'react';
import {shallow} from 'enzyme';

import ExpenseForm from '../../components/expense-form';

describe('<ExpenseForm />', () => {
  
  test('properly adds a new expense', () => {
    
    let name = "Foo";
    let amount = 10;
    
    let expenseCreate = (state) => {
        expect(expenseForm.state().name).toEqual(name);
        expect(expenseForm.state().amount).toEqual(amount);
    }
    
    let expenseForm = shallow(<ExpenseForm handler={expenseCreate} />);
    
    expenseForm.find(".item").simulate( 'change', { target: {name:"name", value:name} } );
    expenseForm.find(".amount").simulate( 'change', { target: {name:"amount", value:amount} } );
    expenseForm.find("form").simulate( 'submit', { preventDefault:()=>{} } );
    
  });
  
})

