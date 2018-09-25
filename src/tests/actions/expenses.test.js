import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import {startAddExpense, addExpense, editExpense, removeExpense } from  '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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



// test ('should setup addexpense action object with default values', () =>{
    
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAd: 0
//         }        
//     })

// })

