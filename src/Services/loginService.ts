import axios from 'axios';
import env from '../Utils/env';

class loginService {

    async login(username: string, password: string): Promise<any> {
        try{
            
            let url = `${env.REACT_APP_API_ENDPOINT}/user/login`;
            let response = await axios.post(url, { username, password });
            if (response.status !== 200) {
                throw "Cannot login";
            }

            let data = response.data.data;
            return data;

        } catch(error) {
            throw error;
        }
    }

}

export default new loginService();