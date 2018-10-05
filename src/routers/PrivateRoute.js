import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRouter = ({
    isAuthentifated, 
    component:Component,
    ...rest //dostęp do wszystkic zmiennych, które są przekazane ale ich nie sdestruktowaliśmy
}) => (
    <Route {...rest} component={(props) => (
        isAuthentifated ? (
           <div>
            <Component {...props}/>
            </div> 
        ): (
            <Redirect to="/"/>
        )
    )}/>
);

const mapStateToProps = (state) => ({ //dajemy dostęp do state
    isAuthentifated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRouter);