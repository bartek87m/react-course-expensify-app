import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm'
import {editExpense, removeExpense} from '../actions/expenses';

export class EditExpensePage extends React.Component{

    onSubmit = (expense) => {//to się dzieje kiedy ExpenseForm jest submitowana:)
        // props.dispatch(editExpense(props.expense.id, expense))
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/')//przekierowanie
    }

    onClick = () => {
        // props.dispatch(removeExpense({ id: props.expense.id}));
        // console.log("ID: " + this.props.expense.id);
        this.props.removeExpense(this.props.expense.id);
        this.props.history.push('/')//przekierowanie
    }

    render() {
        return(

            <div>
                <ExpenseForm
                    expense = {this.props.expense}//przekazanie danych uzyskanych z redux
                    onSubmit= {this.onSubmit}
                />
                <button onClick={this.onClick}>Remove</button>
            </div>
        )
        
    }
}

const mapStateToProps = (state, props) => ({
    
        expense:state.expenses.find((expense) => expense.id === props.match.params.id)
             //propsy z higher component
        
    
});

const mapDispatchToProps = (dispatch, props) => ({
    
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: (data) => dispatch(removeExpense({id: data}))
        
}); 

//dzięki connect poprzez props mamy dostęp do dispatch
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage); //higher component