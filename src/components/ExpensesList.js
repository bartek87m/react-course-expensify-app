import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem'
import selecrtedExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {
                return (
    <div>
        {
            props.expenses.length === 0 ?(
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => {
                   return <ExpenseListItem key={expense.id} {...expense}/>   //teraz ExpenseListItem ma dostemp do całego expense
                })
    
       

        )}
        
    </div>

);
            };

//połaczeni komponentu ExpenseList do redux, ExpenseList ma teraz dostę do store
// i przez props może używac danych ze store
//kiedy store się zmienia  komponent zmienia się dynamicznie tez dynamicznie się zmienia
const mapStateProps = (state) => {
    return {
        expenses: selecrtedExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateProps)(ExpenseList); //łączymy komponent z żeczami, które chcemy dostać ze store

