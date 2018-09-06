import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


// const date = new Date();
const now = moment();
console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component{
   constructor(props){//pobranie propsów
    super(props); //przekazujemy je do super
    console.log(props);
    this.state = {
        description: props.expense ? props.expense.description: '',
        note: props.expense ? props.expense.note: '',
        amount: props.expense ? (props.expense.amount / 100).toString(): '',
        createdAd: props.expense ? moment(props.expense.createdAd): moment(),
        calendarFocused: false,
        error: ''
    }

   }
 
  
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}))
    }

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}))
    }

    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){//wyrażenie rególarne
             this.setState(() => ({amount}));
        }
    }

    onDataChange = (createdAd) => {
        if(createdAd) {
            this.setState(() => ({createdAd}))
        }
        
    }

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'Please enter valid data'}));
        }else{
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAd: this.state.createdAd.valueOf(),
                note: this.state.note


            });
        }
    }

    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        placeholder="Description"
                        autoFocus //przy wejściu na stronę automatycznie ustawia kursor na ten input  
                        value={this.state.description}
                        onChange = {this.onDescriptionChange}
                        />
                    <input
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date = {this.state.createdAd}
                        onDateChange =  {this.onDataChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />

                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                        />
                    <button>Add Expense</button>
                    
                    </form>
            </div>
        )
    }
}