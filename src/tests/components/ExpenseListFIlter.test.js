import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilter } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';


let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();

    wrapper = shallow(
        <ExpenseListFilter //przekazanie pszystkich propsów
            filters = {filters}
            setTextFilter = {setTextFilter}
            sortByDate = {sortByDate}
            sortByAmount = {sortByAmount}
            setStartDate = {setStartDate}
            setEndDate = {setEndDate}   
        />
    );
});

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot();
})


test('should render ExpenseListFilter correctly with different expense', () => {
    wrapper.setProps({
        filters: {altFilters}
    })
    expect(wrapper).toMatchSnapshot();
})

test('should handle setTetxFilter', () =>{
    const value = "bill";

    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    
    
})

test('should handle setTetxFilter', () =>{
    const value = "bill";

    wrapper.find('input').simulate('change', {
        target: {value}
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
    
    
});

test('should handle sortByDate', () =>{
    const value = "date";

    wrapper.setProps({
        filters: altFilters
    })

    wrapper.find('select').simulate('change', {
        target: {value} //przekazanie obiektu e
    });
    expect(sortByDate).toHaveBeenCalled();
    
});


test('should handle sortByAmount', () =>{
    const value = "amount";

    wrapper.setProps({
        filters: filters
    })

    wrapper.find('select').simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
    
});


// test('should handel date changes', () => {
//     const startDate = moment(0).add(4, 'years');
//     const endDate = moment(0).add(4, 'years');
//     wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endtDate});
//     expect(setStartDate).toHaveBeenLastCalledWith(startDate);
//     expect(setEndDate).toHaveBeenLastCalledWith(endDate);
// }); 


// test('should handle date fous changes', () => {
//     const calendarFocused = 'endDate';
//     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused); //przekazanie danych do wybranego propsa
//     expect (wrapper.state('calendarFocused')).toBe(calendarFocused);
// })