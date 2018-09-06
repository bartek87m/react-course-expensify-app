import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//AddExpense
const addExpense = (
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
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE EXPENSE',
    id
});

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT EXPENSE',
    id,
    updates
})

//Set Text Filter

const setTextFilter = (text = '') => ({
    type: 'SET TEXT FILTER',
    text
});

//Sort By amount
const sortByAmount = () => ({
    type: 'SORT BY AMOUNT',
});


//Sort by date

const sortByDate = () => ({
    type: 'SORT BY DATE',
});

//Set Start Date
const setStartDate = (startDate) => ({
    type: 'SET START DATE',
    startDate
});

//Set End Date
const setEndDate = (endDate) => ({
    type: 'SET END DATE',
    endDate
});



//Expenses Reducer

const expensesReducerDefault = [];

const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD EXPENSE':
            // return state.concat(action.expense) //concat bierze tablice dadaje element i zwraca nową
            return[
                ...state,action.expense
            ]
        case 'REMOVE EXPENSE':
            return state.filter(({id}) => id !== action.id);
        
        case 'EDIT EXPENSE':
            return state.map((expense)=>{
                if (expense.id === action.id){
                    return{
                        ...expense,
                        ...action.updates
                    }
                }else{
                    return expense;
                }
            });
            
        default:
            return state;
    }
}

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filterReducerDefault, action) => {
    switch (action.type){
        case 'SET TEXT FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT BY AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT BY DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET START DATE':
            return {
                ...state,
                startDate: action.startDate
            }


        case 'SET END DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
};

//timestamps (miliseconds)
//January 1st 1970 (unix epoch)


//Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {

        return expenses.filter(expense => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAd >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAd <= endDate;


            const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase());

            // console.log(textMatch);

            return startDateMatch && endDateMatch && textMatch;
        }).sort((a ,b) => {
            if(sortBy === 'date'){
                return a.createdAd < b.createdAd ? 1 : -1
            }
            else if(sortBy === 'amount'){
                return a.amount < b.amount ? 1: -1
            }
        
        });



}

//store creation

//combine reducer pozwala na skombinowanie kilku reducerów w jwden
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(()=> {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses );
});

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 440, createdAd: -21000}));
const expenseTwo = store.dispatch(addExpense({description:'Coffe', amount: 300, createdAd: -1000}))

// store.dispatch(removeExpense({id:expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// store.dispatch(setTextFilter('coffe'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1250));

const demoState = {
    expenses: [{
        id: 'afasdfsgs',
        description: 'January Rent',
        note: 'Final payment for this adress',
        amount: 54600,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

// const user  = {
//     name: 'Jen',
//     age: 24
// }

// console.log({
//     ...user,
//     location: 'Philadelphia',
//     age: 255
// });
