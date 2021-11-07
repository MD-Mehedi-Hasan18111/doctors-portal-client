import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    
    const { user, isLoading, admin } = useAuth();

    if (isLoading) {
        return <h2 style={{textAlign: 'center', color: 'red'}}>Loading...</h2>
    }

    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email && admin ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/home",
                state: { from: location }
                }}
            />
            )
        }
    />
    );
};

export default AdminRoute;