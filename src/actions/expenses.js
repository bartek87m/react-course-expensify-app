import uuid from 'uuid';

//Akcje wysyłamy do store poprzez store.dispatch

//AddExpense
export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAd = 0}

     = {}) =>({
        type: 'ADD EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createdAd
    }
});

//Remove Expense
export const removeExpense = ({id} = {}) => ({
    type: 'REMOVE EXPENSE',
    id
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT EXPENSE',
    id,
    updates
})

