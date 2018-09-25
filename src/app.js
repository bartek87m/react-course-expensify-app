
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
import './firebase/firebase'; //uruchamia kod który importuje
// import './playground/promises'

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
   
);

ReactDOM.render(jsx , document.getElementById('app'));









