import React from "react";
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import loginAction from '../../Redux/Actions/LoginAction';

export class LogoutPage extends React.Component<any> {

    componentDidMount() {
        this.props.logout();
    }

    render() {
        return (
        <div id='login-page'>
            username: {this.props.username}
            { !this.props.username && (<Redirect to="/" />) } 
        </div>);
    }
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.loginState
});

export default withRouter(connect(mapStateToProps, {...loginAction})(LogoutPage));