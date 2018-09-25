import React from 'react';
import expenses from "../tests/fixtures/expenses";



class Expenses_totat extends React.Component {

    calculateCosts = (expenses) => {
   
        if(expenses.length === 0){
            return 0;
        }else if(expenses.length === 1){
            return expenses[0].amount;
        }else if(expenses.length > 1){
            return expenses.map((expense) =>  expense.amount).reduce((accumulator, currentValue) => accumulator + currentValue);
        }
    }  

    render() {

        return(
            <p>{this.calculateCosts(expenses)}</p>
        ) 
    }
   
}

export default Expenses_totat;