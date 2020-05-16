import axios from 'axios';
// import authConfig from '../Utils/authConfig';
// import jwt from 'jsonwebtoken';

const axiosMiddleware = ({ getState }: any) => (next: (arg0: any) => any) => async (
    action: any,
) => {
    try {
        if (typeof action === 'function') {
            const loginState = getState().loginState;
            let jwtAccessToken = loginState.jwt;
            axios.defaults.headers.common.Authorization = `${jwtAccessToken}`;
        }

    } catch (ex) {
        console.log('Cannot get access token:', ex);
    }
    
    return next(action)
}

export default axiosMiddleware