import ActionType from '../ActionType';
import newsService from '../../Services/newsService';
import loaderAction from './LoaderAction';

class NewsAction {

    private service: any;

    constructor(srv: any){
        this.service = srv;
    }

    init = () => async (dispatch: any) => {
        try{
            // Set the loader on
            dispatch(loaderAction.showLoading());
            // do something...
            const result = await this.service.getSomething("John Doe");
            // Send resulting state
            dispatch({
                type: ActionType.HOME_INIT,
                payload: {
                   ...result
                }
            });

            // Turn off the loader
            dispatch(loaderAction.hideLoading());
            
        }catch(error){
            if(Array.isArray(error)){
                return;
            }
        }
    };
}

export default new NewsAction(newsService);