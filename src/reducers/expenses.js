
//Expenses Reducer

const expensesReducerDefault = [];

export default (state = expensesReducerDefault, action) => {
    switch (action.type) {
        case 'ADD EXPENSE':
            // return state.concat(action.expense) //concat bierze tablice dadaje element i zwraca nową
            return[
                ...state,action.expense
            ]
        case 'REMOVE EXPENSE':
            console.log("Action ID:" + action.id);
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

        case 'SET EXPENSES':
            return action.expenses;   
                  
        default:
            return state;
    }
}

