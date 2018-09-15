import moment from 'moment'
import total from '../../selectors/total';
import expenses from '../fixtures/expenses';

test('Should return 0', () => {
    let wrapper = total([]);
    expect(wrapper).toBe(0);
})


test('Should return 0', () => {
    let wrapper = total(expenses);
    expect(wrapper).toBe(114195);
})

test('Should return 0', () => {
    let wrapper = total([expenses[0]]);
    expect(wrapper).toBe(195);
})