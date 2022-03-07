import axios from 'axios';
import {
  axiosRequestInterceptor,
  axiosResponseInterceptor
} from './Interceptors';

// base axios instance
const baseInstance = axios.create({
  baseURL: 'https://risechildercenter.herokuapp.com/api',
  timeout: 10000
});

// add interceptors to instance
const attachInterceptors = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use(
    axiosRequestInterceptor.onFulfilled,
    axiosRequestInterceptor.onRejected
  );

  axiosInstance.interceptors.response.use(
    axiosResponseInterceptor.onFulfilled,
    axiosResponseInterceptor.onRejected
  );
};

attachInterceptors(baseInstance);

export default baseInstance;
