import React from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
    <header>
        <h1>Expensifity</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home Page</NavLink>
        <NavLink to="/create" exact={true} activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/help" exact={true} activeClassName="is-active">Help Page</NavLink>
        <button onClick={props.startLogout}>Logout</button>
    </header>
);

const mapDipatchToProps = (dispatch) => ({ //dostęp do dispatch
    startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDipatchToProps)(Header);