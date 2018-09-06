import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'


export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),//potrzebne do redux dev tool
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

    );
    return store;
}

//store creation

//combine reducer pozwala na skombinowanie kilku reducerów w jwden
