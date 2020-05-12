import React from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import loginAction from '../../Redux/Actions/LoginAction';

const LoginPage: React.FC<any> = (props) => {
    return (
    <div id='login-page'>
        <div>
            <input 
                id="username" 
                name="username" 
                placeholder="Enter your username" 
                onChange={(e) => props.onUsernameChanged(e.target.value)} />
        </div>
        <div>
            <input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="Enter your password" 
                onChange={(e) => props.onPasswordChanged(e.target.value)} />
        </div>
        <button type="button" onClick={(e)=>props.onSubmit()} >Login</button>
        { props.isAuthenticated && (<Redirect to="/news" />)}
    </div>);
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.loginState
});

export default withRouter(connect(mapStateToProps, {...loginAction})(LoginPage));