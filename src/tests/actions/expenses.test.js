import {addExpense, editExpense, removeExpense } from  '../../actions/expenses';

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
    const expenseData = {
        description: 'Rend',
        amount: 19500,
        createdAd: 1000,
        note: "This is last years amount"
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }        
    })
})


test ('should setup addexpense action object with default values', () =>{
    
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAd: 0
        }        
    })

})

