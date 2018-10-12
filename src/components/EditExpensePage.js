import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {startEditExpense, startRemoveExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) => {//to się dzieje kiedy ExpenseForm jest submitowana:)
        // props.dispatch(editExpense(props.expense.id, expense))
        // console.log('expense' + expense);
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/')//przekierowanie
    }

    onClick = () => {
        // props.dispatch(removeExpense({ id: props.expense.id}));
        // console.log("ID: " + this.props.expense.id);
        this.props.startRemoveExpense(this.props.expense.id);
        this.props.history.push('/')//przekierowanie
    }

    render() {
        return(
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                 </div>       
                 <div className="content-container">
                    <ExpenseForm
                    expense = {this.props.expense}//przekazanie danych uzyskanych z redux
                    onSubmit= {this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>Remove Expense</button>
                </div>
                
            </div>
        )
        
    }
}

const mapStateToProps = (state, props) => ({
    
        expense:state.expenses.find((expense) => expense.id === props.match.params.id)
             //propsy z higher component
        
    
});

const mapDispatchToProps = (dispatch, props) => ({
    
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense({id: data}))
        
}); 

//dzięki connect poprzez props mamy dostęp do dispatch
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage); //higher component