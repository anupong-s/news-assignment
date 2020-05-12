import ActionType from '../ActionType';
import loginService from '../../Services/loginService';
import loaderAction from './LoaderAction';

class LoginAction {

    private service: any;

    constructor(srv: any) {
        this.service = srv;
    }

    onUsernameChanged = (username: string) => (dispatch: any) => {
        dispatch({
            type: ActionType.LOGIN_CHANGE,
            payload: { username }
        });
    }

    onPasswordChanged = (password: string) => (dispatch: any) => {
        dispatch({
            type: ActionType.LOGIN_CHANGE,
            payload: { password }
        });
    }

    onSubmit = () => async (dispatch: any, getState: any) => {
        try {
            let { username, password } = getState().loginState;
            let user = await this.service.login(username, password);
            if (!user) {
                throw "User not found";
            }

            let payload = { ...user, isAuthenticated: true, password: null };
            console.log("payload: ", payload);

            dispatch({
                type: ActionType.LOGIN_CHANGE,
                payload: payload
            });

        } catch (ex) {
            // Show message;
        }
    }

    logout = () => (dispatch: any) => {
        dispatch({
            type: ActionType.LOGIN_CLEAR
        });
    }


}

export default new LoginAction(loginService);