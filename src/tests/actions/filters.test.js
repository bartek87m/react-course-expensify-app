import moment from 'moment';
import {setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'SET START DATE',
        startDate: moment(0)
    });

});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'SET END DATE',
        endDate: moment(0)
    });
})


test('should generate sort by date object', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT BY DATE'
    })
});

test('should generate sort by amount object', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT BY AMOUNT'
    })
});

test('should generate set text filter', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET TEXT FILTER',
        text: ''
    });
});


test('should generate set text filter', () => {
    const action = setTextFilter('aaa');
    expect(action).toEqual({
        type: 'SET TEXT FILTER',
        text: 'aaa'
    })
})
