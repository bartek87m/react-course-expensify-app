import React from 'react'
import { connect } from 'react-redux';
import total from "../selectors/total";
import selecrtedExpenses from '../selectors/expenses'
import numeral from 'numeral';

export const ExpensesSummary = (props) => {
       
   
    console.log("form Summary", props.visibleExpenses2);
        
        let expenseCount = props.visibleExpenses.length;
        let expensesTotal = numeral(props.expensesTotal / 100).format("$0,0.00");

        return (
            <div>
                <p>Viewing {expenseCount} expenses totalling {expensesTotal}</p>
            </div>
            )
    }
    

const mapStateProps = (state) => {
    const visibleExpenses = selecrtedExpenses(state.expenses, state.filters)
    return {
        visibleExpenses: selecrtedExpenses(state.expenses, state.filters),
        expensesTotal: total(visibleExpenses)
    };
}


export default connect(mapStateProps)(ExpensesSummary); //higher component