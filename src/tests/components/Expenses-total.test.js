import React from 'react'
import {shallow , mount } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm expenses = {[]}/>)
    console.log("aaaa" + wrapper.instance());
})