import axios from "axios";

const baseURL = window.location.host.includes('localhost')?'http://localhost:3000/api':'https://andrew-zachary-dev.onrender.com/api';
const axiosClient = axios.create({
    headers: {
        'x-app-key': import.meta.env.VITE_APP_KEY
    },
    baseURL,
    withCredentials: true
});
export default axiosClient;