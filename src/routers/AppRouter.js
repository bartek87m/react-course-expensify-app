import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundpPage from '../components/NotFoundPage';
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />   
            <Switch>
                <Route path="/" exact={true} component={ExpenseDashboardPage} /> 
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundpPage} />
            </Switch> 
        </div>  
    </BrowserRouter>
)

//switch powoduje że jeżeli któryś Route pasuje nie sprawdza następnych 
//exact określa ze adres musi byc dokładnie taki aby strona się wyświetliła


export default AppRouter;