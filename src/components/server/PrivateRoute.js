import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthProvider } from "../server/Auth";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { user } = useContext(AuthProvider);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        !!user ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/aboutme"} />
        )
      }
    />
  );
};

export default PrivateRoute;
