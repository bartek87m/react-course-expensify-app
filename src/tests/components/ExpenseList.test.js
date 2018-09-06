import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpensesList';
import expenses from '../fixtures/expenses'

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render expenses List with empty message0 ', () =>{
    const wrapper = shallow(<ExpenseList expenses = {[]}/>)
    expect(wrapper).toMatchSnapshot();
})