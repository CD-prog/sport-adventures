import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthed, ...rest }) => {
    return (
        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signIn page
        <Route {...rest} render={props => (
            isAuthed ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;