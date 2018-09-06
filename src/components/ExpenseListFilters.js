
import React from 'react';
import {connect} from 'react-redux';
import 'react-dates/initialize';
// import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';


export class ExpenseListFilter extends React.Component{ //exportowanie nie połaczonej z reduxem wersji

    state = {
        focusedInput: null
    };

    onDatesChange = ({startDate, endDate}) => {
         this.props.setStartDate(startDate);
         this.props.setEndDate(endDate);

    };

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = (e) => {
        if(e.target.value === 'amount'){
            this.props.sortByAmount();
        }else if(e.target.value === 'date'){
            this.props.sortByDate();
        };
    };

    render(){
        return(
            <div>
                <input type="text" value={this.props.filters.text} 
                onChange={this.onTextChange}/>

                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>

                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId="startDateId"
                    endDate={this.props.filters.endDate}
                    endDateId="endDateId"  
                    onDatesChange={this.onDatesChange} 
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })} 
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange = {() => false}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({filters: state.filters});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))

});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter); 
//wyeksportowanie wersji połączonej z redux