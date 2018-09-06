import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state' ,() => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by ID', () => {
    const action = {
        type: 'REMOVE EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should nor remove expense if ID not found', () => {
    const action = {
        type: 'REMOVE EXPENSE',
        id: '-2dafasf'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const newExpense = {
    id: '4',
    description: 'Beer',
    note:'',
    amount: 345,
    createdAd: 0
    }

    const action = {
        type: 'ADD EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should edit expense', () => {

    const description =  'Vodka'
    
    const action = {
        type: 'EDIT EXPENSE',
        id: expenses[2].id,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[2].description).toBe(description);
    
});


test(`Shouldn't edit expense`, () => {

    const description =  'Vodka'
    
    const action = {
        type: 'EDIT EXPENSE',
        id: 3,
        updates: {
            description
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
    
});

