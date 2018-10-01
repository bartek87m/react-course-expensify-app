import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense,startSetExpenses ,removeExpense, setExpenses } from  '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import expensesReducer from '../../reducers/expenses'

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({id, description, note, amount, createdAd}) => {
        expensesData[id] = {description, note, amount, createdAd};
    })
    //dzięki done mamy pewność że zaden test się nie zaczniepuki firebase nie zsynchronizuje danych
    database.ref('expenses').set(expensesData).then(() => done());
})

test('should setup remove expense action object', () =>{
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object' ,() =>{
    const action = editExpense('123abc',  {note: 'new note'});
    
    expect(action).toEqual({
        type: 'EDIT EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note'
        }
    });

});

test ('should setup addexpense action object with values', () =>{
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD EXPENSE',
        expense: expenses[2]
    })
})

// ten test sie nie skończy do puki nie wywołamy done
test ('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'Is better',
        createdAd: 1000
    }
    //sprawdzany zapisanie do store
    store.dispatch(startAddExpense(expenseData)).then(() => { //dzięki return możemy w Promise wykonań kolejnego then - tutaj return jest w pliku /actions/expenses
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        //sprawdzamy zapisanie do database
        //zwracamy nowe promisce 
        return database.ref(`expenses/${actions[0].expense.id}`)
        .once('value');
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});

test ('Should add expense with default to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
            description: '', 
            note: '', 
            amount: 0, 
            createdAd: 0
    }
    store.dispatch(startAddExpense({})).then(() => { //dzięki return możemy w Promise wykonań kolejnego then - tutaj return jest w pliku /actions/expenses
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`)
        .once('value');
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});

test('should setup set expenses actin object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET EXPENSES',
        expenses
    })
});

test('should set expenses', () => {
    const action = {
        type: 'SET EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
});

test('should fetch the expenses from database', () => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET EXPENSES',
            expenses
        });
        done();
    })
});


