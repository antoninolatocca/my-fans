import React from "react";
import { Route, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Route
            {...rest}
            render={() => {
              navigate("/login");
              return null;
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
