import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const LoginRequiredRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/news',
        state: { from: props.location }
      }} />
    )
  )} />
)

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.loginState
});

export default connect(mapStateToProps)(LoginRequiredRoute);