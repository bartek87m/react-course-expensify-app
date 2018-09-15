import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses'
import total from '../../selectors/total'

test('should render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary visibleExpenses={expenses.length} expensesTotal = {total(expenses)}/>)
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary visibleExpenses={expenses[1]} expensesTotal = {total([expenses[1]])}/>)
    expect(wrapper).toMatchSnapshot();
})
