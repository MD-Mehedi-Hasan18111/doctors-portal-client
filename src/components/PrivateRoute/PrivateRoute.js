import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <h2 style={{textAlign: 'center', color: 'red'}}>Loading...</h2>
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
    />
    );
};

export default PrivateRoute;