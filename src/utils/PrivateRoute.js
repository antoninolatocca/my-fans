import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ element: Component, ...rest }) => {
  // const isAuth = useSelector(state => state.auth.isAuthenticated);
  const isAuth = true;
  return (
    <Route {...rest} render={props => isAuth ? <Component {...props} /> : <Navigate to='/login' />} />
  );
};

export default PrivateRoute;