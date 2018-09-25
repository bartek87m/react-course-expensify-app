import React from 'react';
import {shallow} from 'enzyme';
import {AddExpensePage} from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let startAddExpense, addExpense, history, wrapper;

beforeEach(() => {
    startAddExpense = jest.fn();
     history = {push: jest.fn()};
     wrapper = shallow(<AddExpensePage 
        startAddExpense = {startAddExpense} history={history}/>);
    
});

test('Should render AddExpenseComponent', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle on Submit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1]);
});





