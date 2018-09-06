//Higher order components (HOC) - A component that render another component
//Reuse code
//Render hijacking
//prop manipulation
//Abstract state

import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please don't share</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => { //to jest tylko funkcja, która zwraca HOC
    return (props) => ( //tu zwracamy higher order component
        <div>
            {props.isAuthentificated ? 
                <WrappedComponent {...props}/> : //przekazujemmy props do cmponentu orginalnego z propsów powyżej
                <p>Please LogIn First</p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentification(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="There are the default"/> , document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificated = {true} info="There are the default"/> , document.getElementById('app'));
