import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'

// deconstructing the props that are brought in to change lowercase component to uppercase for JSX purposes


const PrivateRoute = ({ component: Component, ...rest }) => {
  return (

    <Route
      {...rest}
      render={props =>
//checking localStorage for token and conditionally rendering whichever Component has been passed in to PrivateRoute on the App.js, otherwise redirecting to login page. 
        localStorage.getItem("jwt") ? (
          <Component {...props} />
        ) : (
// this needs an error message to explain what's going on
          <Redirect to="/login" />
        )
      }
    />
  );
};

//this was an attempt to check state for token to conditionally render instead of localStorage. I'm going to go back and try again so I'm not deleting it. 

// const mapStateToProps = ({ token }) => ({
//     token: state.token
// });

export default PrivateRoute
