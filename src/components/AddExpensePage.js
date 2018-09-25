import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from "./ExpenseForm";
import {startAddExpense} from '../actions/expenses';

export class AddExpensePage extends React.Component{
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        console.log(expense)
        this.props.startAddExpense(expense)
        this.props.history.push('/');//tak jakby ktoś kliknoł link
    } 
    render() {
        return(
            <div>
            <h1>Add Expense</h1>
            <ExpenseForm
                onSubmit={this.onSubmit}
            />
        </div> 
        )
    }
}

const mapDispatchToProps = (dispatch) => ({ //pozwala zwrócić dispathc poza komponentem
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
    
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage);