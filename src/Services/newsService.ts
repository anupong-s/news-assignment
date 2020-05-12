import axios from 'axios';
// import ResponseDTO from '../DTOs/ResponseDTO';
import env from '../Utils/env';

class newsService {

    //TODO: Implement this
    async getSomething(data: string): Promise<any> {
        try{
            
            const result: any = {
                greeting: "Hello " + data
            };

            let url = `${env.REACT_APP_API_ENDPOINT}/news/af0266c8-92aa-11ea-bd4a-ae5cc4c27d2e`

            let x = await axios.get(url);

            console.log("Response: ", x);

            return result;

        } catch(error) {
            throw error;
        }
    }





}

export default new newsService();