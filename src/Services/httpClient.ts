import axios from 'axios';
// import authConfig from '../Utils/authConfig';
// import jwt from 'jsonwebtoken';

const axiosMiddleware = ({ getState }: any) => (next: (arg0: any) => any) => async (
    action: any,
) => {
    try {
        if (typeof action === 'function') {
            const authToken = getState().authState;
            let jwtAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDUyZGNjOC05MzliLTExZWEtODEzNy01YmQ1MWEwMmJkYWMiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjIwNzQ3Mjg4OTA3LCJpYXQiOjE1ODkyMTEyODh9.8sYiN6anMsuCshp_UPmABYxcjOeQ7WDZBufmaB84xsw";
            axios.defaults.headers.common.Authorization = `${jwtAccessToken}`;
        }

    } catch (ex) {
        console.log('Cannot get access token:', ex);
    }
    
    return next(action)
}

export default axiosMiddleware