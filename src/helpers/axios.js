import axios from "axios";
import { url, prodUrl, prodUrlTest } from "../urlConfig";
// import { authConstants } from "../actions/constants";
// import store from "../store";

const token = localStorage.getItem('token');

export const axiosInstance = axios.create({
    baseURL: prodUrlTest,
    headers: {
        Authorization: token ? `Bearer ${token}` : ''
    }
});

// axiosInstance.interceptors.request.use((req) => {

//     const { auth } = store.getState();

//     if (auth.token) {
//         req.headers.Authorization = `Bearer ${auth.token}`;
//     }

//     return req;
// })

// axiosInstance.interceptors.response.use((res) => {
//     return res;
// }, (error) => {
//     const { status } = error.response;
//     if (status === 500) {
//         localStorage.clear();

//         store.dispatch({
//             type: authConstants.LOGOUT_SUCCESS
//         });
//     }

//     return Promise.reject(error);
// })