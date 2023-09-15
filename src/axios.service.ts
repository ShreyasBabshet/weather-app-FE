import axios, { AxiosInstance } from 'axios';

const axiosInstance: AxiosInstance = axios.create();

axiosInstance.interceptors.request.use((req: any) => {
    const BaseUrl = import.meta.env.VITE_APP_BASE_URL;
    req.url = BaseUrl + req.url + `&appid=${import.meta.env.VITE_API_KEY}`;
    return req;
})
export default axiosInstance;