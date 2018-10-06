import React from 'react';
import { connect } from 'react-redux';
import {startLogin} from '../actions/auth';



export const LoginPage = ({startLogin}) => ( //przekazujemy jako obiekt
    <div>
        <p>Login Page</p>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);