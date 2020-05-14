import React from "react";
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import newsAction from '../../Redux/Actions/NewsAction';
import LoaderComponent from '../../Components/Loader/Loader';
import ViewNewsComponent from '../../Components/ViewNews/ViewNewsComponent';
import Swal from 'sweetalert2';

// const News: React.FC<any> = (props) => {
export class News extends React.Component<any> {

    state = {
        newsComponent: []
    }

    async componentDidMount() {
        await this.props.onSearchNews(new Date());
        let newsComponent = this.props.news.map((n: any)=> {
            return (<ViewNewsComponent 
                title={n.title} 
                shortDescription={n.shortDescription}
                displayPublishDate={n.displayPublishDate}
                image={n.image}
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

        this.setState({ newsComponent: newsComponent });
    }

    render() {

        let newsComponent = this.props.news.map((n: any)=> {
            return (<ViewNewsComponent 
                title={n.title} 
                shortDescription={n.shortDescription}
                displayPublishDate={n.displayPublishDate}
                image={n.image}
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
            <div id='news-page'>
                <LoaderComponent />
                <h1>News</h1>
                <div>
                    <button>
                        <Link to="/add-news">Add news</Link>
                    </button>
                </div>
                { newsComponent }
            </div>
        )
    }
}

const mapStateToProps = (state: any, ownProps: any)  => ({
    ...state.newsState
});

export default withRouter(connect(mapStateToProps, {...newsAction})(News));