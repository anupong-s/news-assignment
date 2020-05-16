import React from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import loginAction from '../../Redux/Actions/LoginAction';
import { LoginForm } from "../../Components/Login/LoginForm/LoginForm";
import { LoginHeader } from "../../Components/Login/LoginHeader/LoginHeader";
import "./Login.scss";

const LoginPage: React.FC<any> = (props) => {
    return (
        <div className="login-page-container">
            <LoginHeader>
                <LoginForm 
                    onUsernameChanged={props.onUsernameChanged}
                    onPasswordChanged={props.onPasswordChanged}
                    onSubmit={props.onSubmit}
                ></LoginForm>
                { props.isAuthenticated && (<Redirect to="/news" />)}
            </LoginHeader>
        </div>
    );
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.loginState
});

export default withRouter(connect(mapStateToProps, {...loginAction})(LoginPage));