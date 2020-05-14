import IAction from '../IAction';
import ActionType from '../ActionType';

const initState = {
    id: "",
    title: "",
    shortDescription: "",
    publishDate: new Date(),
    image: "",
    isExpand: false
}

const reducer = (state = initState, action: IAction<any>) => {

    switch(action.type){
        default:
            return state
        case ActionType.NEW_CHANGE:
            return {
                ...state,
                ...action.payload
            };
        case ActionType.NEW_CLEAR:
            return initState;
    }
};

export default reducer;