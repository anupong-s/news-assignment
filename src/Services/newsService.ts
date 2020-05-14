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

    async getNewsById(id: string): Promise<any> {
        try {

            let url = `${env.REACT_APP_API_ENDPOINT}/news/${id}`;
            let response = await axios.get(url);
            if (response.status !== 200) {
                throw "Can not get news. Please contact administrator";
            }

            let data = response.data.data;
            return data;

        } catch (ex) {

        } finally {

        }
    }

    async createNews(data: any): Promise<any> {
        try {
            let url = `${env.REACT_APP_API_ENDPOINT}/news`;
            let response = await axios.post(url, data);
            if (response.status !== 200) {
                throw "Can not create news. Please contact administrator";
            }
        } catch (ex) {
            throw ex;
        }
    }

    async updateNews(id: string, data: any): Promise<any> {
        try {
            let url = `${env.REACT_APP_API_ENDPOINT}/news/${id}`;
            let response = await axios.put(url, data);
            if (response.status !== 200) {
                throw "Can not create news. Please contact administrator";
            }
        } catch (ex) {
            throw ex;
        }
    }

    async deleteNews(id: string): Promise<any> {
        try {
            let url = `${env.REACT_APP_API_ENDPOINT}/news/${id}`;
            let response = await axios.delete(url);
            if (response.status !== 200) {
                throw "Can not delete news. Please contact administrator";
            }
        } catch (ex) {
            throw ex;
        }
    }

}

export default new newsService();