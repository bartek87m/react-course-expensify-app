import {Router, Route, Switch} from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundpPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';

//tworzymy swoją historym którą również zaściankowo tworzy BrowseRouter 
// ale tutaj my tworzymy swoją żebyśmy mogli uzyc history nie tylko w komponentach
//które są w BrowseRouter dlatego zamieniamy BrowseRouter na Router i podajemy własną 
//history dzięki temu możemy ją wyeksportować i użyć w innych plikach
export const history = createHistory();


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />   
            <Switch>
                <Route path="/" exact={true} component={LoginPage} /> 
                <PrivateRoute path="/dashboard" exact={true} component={ExpenseDashboardPage} /> 
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundpPage} />
            </Switch> 
        </div>  
    </Router>
)

//switch powoduje że jeżeli któryś Route pasuje nie sprawdza następnych 
//exact określa ze adres musi byc dokładnie taki aby strona się wyświetliła


export default AppRouter;