import moment from 'moment';

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

export default (state = filterReducerDefault, action) => {
    switch (action.type){
        case 'SET TEXT FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT BY AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT BY DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SET START DATE':
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET END DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
};