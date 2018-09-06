import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensifity</h1>
        <NavLink to="/" exact={true} activeClassName="is-active">Home Page</NavLink>
        <NavLink to="/create" exact={true} activeClassName="is-active">Create expense</NavLink>
        <NavLink to="/help" exact={true} activeClassName="is-active">Help Page</NavLink>
    </header>
);

export default Header;