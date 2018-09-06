
//Get visible expenses
import moment from 'moment';

export default (expenses, {text, sortBy, startDate, endDate}) => {

    return expenses.filter(expense => {
        const createdAdMoment = moment(expense.createdAd);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAdMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAdMoment, 'day') : true;


        const textMatch = (expense.description).toLowerCase().includes(text.toLowerCase());

        // console.log(textMatch);

        return startDateMatch && endDateMatch && textMatch;
            }).sort((a ,b) => {
        if(sortBy === 'date'){
            return a.createdAd < b.createdAd ? 1 : -1
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1: -1
        }
    
    });
}