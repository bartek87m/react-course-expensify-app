
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provider daje komponentom dostęp do store
import AppRouter from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
// import {setTextFilter} from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/scyles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: 'Water Bill', amount: 4400, createdAd: -23000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAd: 21000}));
store.dispatch(addExpense({description: 'Rent Bill', amount: 195000, createdAd: 1000}));

const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

console.log(store);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
   
);

ReactDOM.render(jsx , document.getElementById('app'));









