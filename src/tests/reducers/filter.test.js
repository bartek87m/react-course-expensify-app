import moment  from 'moment';
import filterReducer from '../../reducers/filters';


test('should setup default filter values', () => {
    const state = filterReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, {type: 'SORT BY AMOUNT'});
    expect(state.sortBy).toBe('amount')
});

test('should set sortBy to date', () => {
    const currentState = {
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT BY DATE'}
    const state = filterReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set set text filter', () => {

    const action = {
        type: 'SET TEXT FILTER',
        text:'AAA'
    }
    const state = filterReducer(undefined, action);
    expect(state.text).toBe('AAA');
});

test('should set set start date filter', () => {

    const action = {
        type: 'SET START DATE',
        startDate: moment(0)
    }
    const state = filterReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

test('should set set start date filter', () => {

    const action = {
        type: 'SET END DATE',
        endDate: moment(0)
    }
    const state = filterReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});
