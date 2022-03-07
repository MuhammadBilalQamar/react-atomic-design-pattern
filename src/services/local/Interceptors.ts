export const axiosRequestInterceptor = {
  onFulfilled: (config: any) => {
    const token = 'getToken';

    //   add token to header
    const modifyHeaders = {
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: `Bearer ${token}`
      }
    };
    config = { ...config, ...modifyHeaders };

    return config;
  },
  onRejected: (error: any) => {
    return Promise.reject(error);
  }
};

export const axiosResponseInterceptor = {
  onFulfilled: (res: any) => {
    if (res.status === 200) return res;
  },
  onRejected: (error: any) => {
    let errorIs = error?.message;

    if (error?.response && error.response.status === 401) {
      errorIs = 'unauthorized, 401';
    }

    return Promise.reject(`request failed: ${errorIs}`);
  }
};
