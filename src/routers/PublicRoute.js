import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';



export const PublicRoute = ({
    isAuthentifated, 
    component:Component,
    ...rest //dostęp do wszystkic zmiennych, które są przekazane ale ich nie sdestruktowaliśmy
}) => (
    <Route {...rest} component={(props) => (
        isAuthentifated ? (
            <Redirect to="/dashboard"/>
        ): (
            <div>
            <Component {...props}/>
            </div> 
        )
    )}/>
);

const mapStateToProps = (state) => ({ //dajemy dostęp do state
    isAuthentifated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);