import Config from './config';
import axios from 'axios';

const apiFetcher = axios.create({
    baseURL: Config.BACKEND_URL
});

apiFetcher.defaults.headers.common['Authorization'] = Config.BACKEND_SECURITY_TOKEN;

export default apiFetcher