import ActionType from '../ActionType';
import newsService from '../../Services/newsService';
import loaderAction from './LoaderAction';
import moment from 'moment';

class NewsAction {

    private service: any;

    constructor(srv: any){
        this.service = srv;
    }

    init = () => async (dispatch: any) => {
        try {
            dispatch({
                type: ActionType.NEW_CLEAR,
                payload: {}
            })
        } catch(ex) {
            console.log(ex);
        } finally {

        }
    }
    
    searchNews = async (publishDate, sort) => {
        let news = await this.service.getNews(publishDate, sort);
        let payload = news.map(n => {
            let result = {...n};
            result.displayPublishDate = moment(result.publishDate).format("DD/MM/YYYY");
            return result;
        });

        return payload;
    }

    onSearchNews = (publishDate: Date) => async (dispatch:any, getState: any) => {
        try {
            let { sort } = getState().newsState;

            let payload = await this.searchNews(publishDate, sort);
            dispatch({
                type: ActionType.NEW_CHANGE,
                payload: { 
                    publishDate: publishDate,
                    news: payload 
                }
            });

        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    searchNewsById = (id: string) => async (dispatch: any) => {
        try {
            let news = await this.service.getNewsById(id);
            let payload = {...news};
            payload.publishDate = new Date(payload.publishDate);
            dispatch({
                type: ActionType.NEW_CHANGE,
                payload: {
                    ...payload,
                    id: id
                }
            });

        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    onSaveNews = (values: any) => async (dispatch: any, getState: any) => {
        try {

            let data = {
                title: values.title,
                shortDescription: values.shortDescription,
                publishDate: values.publishDate,
                image: values.image
            }
    
            await this.service.createNews(data);

        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    onUpdateNews = (id: string, values: any) => async (dispatch: any, getState: any) => {
        try {

            let data = {
                title: values.title,
                shortDescription: values.shortDescription,
                publishDate: values.publishDate,
                image: values.image
            }

            await this.service.updateNews(id, data);

        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    onDeleteNews = (id: string) => async (dispatch: any, getState: any) => {
        try {
            let { publishDate, sort } = getState().newsState;

            await this.service.deleteNews(id);

            let payload = await this.searchNews(publishDate, sort);

            dispatch({
                type: ActionType.NEW_CHANGE,
                payload: { 
                    publishDate: publishDate,
                    news: payload 
                }
            });

        } catch (ex) {
            console.log(ex);
        } finally {

        }
    }

    onPublishDateChanged = (publishDate: Date) => async (dispatch: any, getState: any) => {
        try {
            let { sort } = getState().newsState;

            let payload = await this.searchNews(publishDate, sort);

            dispatch({
                type: ActionType.NEW_CHANGE,
                payload: { 
                    publishDate: publishDate,
                    news: payload 
                }
            });


        } catch (ex) {
            console.log(ex);
        }
    }

    onSorted = () => async (dispatch: any, getState: any) => {
        try {

            let { publishDate, sort } = getState().newsState;

            let newSort = sort === 'asc' ? 'desc': 'asc';
            let payload = await this.searchNews(publishDate, newSort);
            
            dispatch({
                type: ActionType.NEW_CHANGE,
                payload: { 
                    sort: newSort,
                    news: payload
                }
            });

        } catch (ex) {
            console.log(ex);
        }
    }

}

export default new NewsAction(newsService);