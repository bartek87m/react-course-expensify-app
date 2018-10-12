import React from 'react'
import { connect } from 'react-redux';
import total from "../selectors/total";
import selecrtedExpenses from '../selectors/expenses'
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const ExpensesSummary = (props) => {
       
   
    console.log("form Summary", props.visibleExpenses2);
        
        let expenseCount = props.visibleExpenses.length;
        let expensesTotal = numeral(props.expensesTotal / 100).format("$0,0.00");

        return (
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Viewing <span>{expenseCount} </span>expenses totalling <span>{expensesTotal}</span></h1>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </div>
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