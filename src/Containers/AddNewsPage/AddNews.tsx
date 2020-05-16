import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import newsAction from '../../Redux/Actions/NewsAction';
import AddNewsComponent from '../../Components/AddNews/AddNewsComponent';
import { LoginPermission } from '../../Components/Login';
import Swal from 'sweetalert2';

export class AddNews extends React.Component<any> {

    componentDidMount() {
        const newId = this.props.match.params.id;
        if (newId) {
            this.props.searchNewsById(newId);
        }
    }

    onShowDialog = () => {
        let message = this.props.id ? "Update news success" : "Save news success";
        Swal.fire('Success', message, 'success'
        ).then(()=> {
            this.props.history.push('/');
        })
    }

    onSubmit = async (values: any) => {
        if (this.props.id) {
            await this.props.onUpdateNews(this.props.id, values);
        } else {
            await this.props.onSaveNews(values);
        }

        this.onShowDialog();
    }

    renderNotPermission = () => {
        return (
            <LoginPermission history={this.props.history} />
        )
    }

    render() {
        return (
            <div id='news-page'>
                { !this.props.isAuthenticated && this.renderNotPermission() }
                { this.props.isAuthenticated && <AddNewsComponent 
                        id={this.props.id}
                        title={this.props.title}
                        shortDescription={this.props.shortDescription}
                        publishDate={this.props.publishDate}
                        image={this.props.image}
                        onSubmit={this.onSubmit}
                    />
                }
            </div>
        )
    }
    
};

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.newsState, isAuthenticated: state.loginState.isAuthenticated
});

export default withRouter(connect(mapStateToProps, {...newsAction})(AddNews));