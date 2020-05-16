import React from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Grid, Form } from 'semantic-ui-react';
import newsAction from '../../Redux/Actions/NewsAction';
import LoaderComponent from '../../Components/Loader/Loader';
import DatePicker from "react-datepicker";
import { ViewNewsComponent } from '../../Components/News';
import { LoginPermission } from '../../Components/Login';
import Swal from 'sweetalert2';
import './News.scss';
import "react-datepicker/dist/react-datepicker.css" //import style DatePicker

// const News: React.FC<any> = (props) => {
export class News extends React.Component<any> {

    async componentDidMount() {
        await this.props.onSearchNews(new Date());
    }

    onAddNews = () => {
        this.props.history.push("/add-news");
    }

    onSignOut = () => {
        this.props.history.push("/logout");
    }

    renderNotPermission = () => {
        return (
            <LoginPermission history={this.props.history} />
        )
    }

    renderNews = () => {
        let newsComponent = this.props.news.map((n: any, index: number)=> {
            return (<ViewNewsComponent 
                newId={n.id}
                key={index}
                title={n.title} 
                shortDescription={n.shortDescription}
                displayPublishDate={n.displayPublishDate}
                image={n.image}
                history={this.props.history}
                onDelet={()=> {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "Do you want to delete?",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.value) {
                          this.props.onDeleteNews(n.id);
                        }
                    })
                }}
            />)
        });

        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column>
                        <h1>News</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Button color='green' size='medium' content="Add news" onClick={this.onAddNews} />
                        <Button color='blue' size='medium' content="Sign out" onClick={this.onSignOut} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={16}>
                    <Grid.Column width={8}>
                        <Form>
                            <Form.Group widths="equal">
                                <Form.Field>
                                    <DatePicker
                                        className="ui fluid input"
                                        selected={this.props.publishDate}
                                        onChange={this.props.onPublishDateChanged}
                                        dateFormat="dd/MM/yyyy"
                                        placeholderText="DD/MM/YYYY"
                                    />
                                </Form.Field>
                            </Form.Group>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={8} textAlign="right">
                        <Button 
                        color='blue' 
                        size='medium' 
                        icon={ this.props.sort === "asc" ? "sort alphabet down" : "sort alphabet up" }
                        content="Sort" 
                        onClick={this.props.onSorted} />
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        { newsComponent }
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {

        return (
            <div className='news-page-container'>
                <LoaderComponent />
                { this.props.isAuthenticated && this.renderNews() }
                { !this.props.isAuthenticated && this.renderNotPermission() }
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.newsState, isAuthenticated: state.loginState.isAuthenticated
});

export default withRouter(connect(mapStateToProps, {...newsAction})(News));