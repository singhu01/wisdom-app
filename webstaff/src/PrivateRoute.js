import React from "react";
import { Route, Redirect } from "react-router-dom/cjs/react-router-dom.min";

function PrivateRoute({ component: Component, isLoggedIn, ...rest}){
    console.log("rest", Component);
    return (
      <Route {...rest}
          render= {(props) =>
            isLoggedIn ? <Component {...props}/> : <Redirect to="/" />
        }
     />
    )
  }

  export default PrivateRoute;