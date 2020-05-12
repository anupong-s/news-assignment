import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import newsAction from '../../Redux/Actions/NewsAction';
import LoaderComponent from '../../Components/Loader/Loader';

const News: React.FC<any> = (props) => {
    return (
    <div id='news-page'>
        <LoaderComponent />
        <h1>{props.greeting}</h1>
        <button type="button" onClick={(e)=>props.init()} >Click Me</button>
    </div>
    )
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.homeState
});

export default withRouter(connect(mapStateToProps, {...newsAction})(News));