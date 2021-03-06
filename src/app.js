
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'; // provider daje komponentom dostęp do store
import AppRouter, { history } from './routers/AppRouter.js'
import configureStore from './store/configureStore'
import { login, logout } from './actions/auth'
import {startSetExpenses} from './actions/expenses'
// import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/scyles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase'; //uruchamia kod który importuje
// import './playground/promises'
import LoadingPage from './components/LoadingPage';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
   
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){ //chcemy tylko raz renderować aplikacja, dlatego sprawdamy czy już jest zarenderowana
        ReactDOM.render(jsx , document.getElementById('app'));
        hasRendered = true;
    }
};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(() => {
        renderApp();
        if(history.location.pathname === '/')
        history.push('/dashboard')
    });        
    }else{
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});











