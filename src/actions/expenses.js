import uuid from 'uuid';
import database from '../firebase/firebase';
//Akcje wysyłamy do store poprzez store.dispatch

//AddExpense
export const addExpense = (expense) =>({
        type: 'ADD EXPENSE',
        expense
});

export const startAddExpense = (expenseData = {}) => {
     //zwracamy funkcję zamiast obiektu, działa tylko dzięki użyciu middleware redux thunk
    return (dispatch) => { //daje nam dostęp do dispatch
        const { //alternatywny sposób na zapisanie domyślnych wartości
            description = '', 
            note = '', 
            amount = 0, 
            createdAd = 0
        } = expenseData;
        
        const expense = {description, note, amount, createdAd}; //obiekt który przekazujemy 
        //zapytania do database są asynchroniczn i działają jako promisce
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({//po dodaniu danych do firebase zapisujemy je do redux
                id: ref.key,
                ...expense
            }));
        });
    }
};

//Remove Expense
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE EXPENSE',
    id
});

export const startRemoveExpense = (({id}) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).remove().then(() => {
            
            dispatch(removeExpense({id}));
        });
    }
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return(dispatch) => {
        return database.ref(`expenses/${id}`).update(updates).then((snapshot) => {
            dispatch(editExpense(id, updates));
        });
    }
};

//SET EXPENSES
export const setExpenses = (expenses) => ({
    type: 'SET EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch) => {
        
        return database.ref('expenses').once('value').then((snapshot) => {
            const expenses = [];
            snapshot.forEach((snap) => {
              expenses.push({
                id: snap.key,
                ...snap.val()
              })                
            });
            
            dispatch(setExpenses(expenses));
            
        })
    }
};
