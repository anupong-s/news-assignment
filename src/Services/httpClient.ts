import axios from 'axios';
// import authConfig from '../Utils/authConfig';
// import jwt from 'jsonwebtoken';

const axiosMiddleware = ({ getState }: any) => (next: (arg0: any) => any) => async (
    action: any,
) => {
    // add token to axios header
    // console.log('Get access token');
    try {
        if (typeof action === 'function') {
            const authToken = getState().authState;
            let jwtAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDUyZGNjOC05MzliLTExZWEtODEzNy01YmQ1MWEwMmJkYWMiLCJ1c2VybmFtZSI6ImFkbWluIiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjIwNzQ3Mjg4OTA3LCJpYXQiOjE1ODkyMTEyODh9.8sYiN6anMsuCshp_UPmABYxcjOeQ7WDZBufmaB84xsw";
            axios.defaults.headers.common.Authorization = `${jwtAccessToken}`;


            // if (authToken && authToken.account && !authToken.jwtAccessToken) {
            //     if (!isAlreadyFetchingAccessToken) {
            //         isAlreadyFetchingAccessToken = true;
    
            //         console.log('Get access token');
            //         let responseToken = await authConfig.getAccessToken();
            //         if (responseToken && responseToken.accessToken) {
            //             let jwtAccessToken = responseToken.accessToken;
            //             axios.defaults.headers.common.Authorization = `${jwtAccessToken}`;
            //         }
    
            //         isAlreadyFetchingAccessToken = false;
            //     }
                
            // } else if (authToken && authToken.account && authToken.jwtAccessToken) {
            //     let accessToken = authToken.jwtAccessToken;
            //     let jwtDecode = jwt.decode(accessToken, { complete: true });
            //     if (jwtDecode && jwtDecode.payload) {
            //         let exp = new Date(jwtDecode.payload.exp * 1000);
            //         let currentDate = new Date();
            //         if (currentDate > exp) {
            //             if (!isAlreadyFetchingAccessToken) {
            //                 isAlreadyFetchingAccessToken = true;
            //                 let responseToken = await authConfig.getAccessToken();
            //                 if (responseToken && responseToken.accessToken) {
            //                     accessToken = responseToken.accessToken;
            //                     console.log('Refresh token: ', accessToken);
            //                 }
    
            //                 isAlreadyFetchingAccessToken = false;
            //             }
            //         } else {
            //             // console.log('Current token: ', accessToken);
            //         }
            //     }
    
            //     axios.defaults.headers.common.Authorization = `${accessToken}`;
            // }
        }

    } catch (ex) {
        console.log('Cannot get access token:', ex);
    }
    
    return next(action)
}

export default axiosMiddleware