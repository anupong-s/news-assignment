import axios from 'axios';
// import ResponseDTO from '../DTOs/ResponseDTO';
import env from '../Utils/env';

class newsService {

    async getNews(publishDate: Date, direction: string = "asc"): Promise<any> {
        try {

            let url = `${env.REACT_APP_API_ENDPOINT}/news/?publishDate=${publishDate}&direction=${direction}`;
            let response = await axios.get(url);
            if (response.status !== 200) {
                throw "Can not get news. Please contact administrator";
            }

            let data = response.data.data;
            return data;

        } catch (ex) {
            console.log(ex);
        } finally {

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