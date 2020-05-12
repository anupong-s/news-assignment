import IAction from '../IAction';
import ActionType from '../ActionType';

const initState = {
    isAuthenticated: false,
    jwt: null,
    username: null,
    password: null,
    userId: null
}

const reducer = (state = initState, action: IAction<any>) => {

    switch(action.type){
        default:
            return state
        case ActionType.LOGIN_CHANGE:
            return {
                ...state,
                ...action.payload
            };
        case ActionType.LOGIN_CLEAR:
            return initState;
    }
};

export default reducer;