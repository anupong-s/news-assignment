import ActionType from '../ActionType';
import newsService from '../../Services/newsService';
import loaderAction from './LoaderAction';

class NewsAction {

    private service: any;

    constructor(srv: any){
        this.service = srv;
    }

    init = () => async (dispatch: any) => {
        try {
            
        } catch(error){
            
        } finally {

        }
    }

    searchNews = () => (dispatch:any, getState: any) => {

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

        } finally {

        }
    }

    onDeleteNews = (id: string) => async (dispatch: any) => {
        try {

            await this.service.deleteNews(id);

        } catch (ex) {

        } finally {

        }
    }

}

export default new NewsAction(newsService);