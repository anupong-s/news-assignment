import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import homeAction from '../../Redux/Actions/HomeAction';
import LoaderComponent from '../../Components/Loader/Loader';

const HomePage: React.FC<any> = (props) => {
    return (<div id='home-page'>
        <LoaderComponent />
        <h1>{props.greeting}</h1>
        <button type="button" onClick={(e)=>props.init()} >Click Me</button>
    </div>);
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.homeState
});

export default withRouter(connect(mapStateToProps, {...homeAction})(HomePage));