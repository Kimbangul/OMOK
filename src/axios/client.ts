import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

class AxiosClient {
  client: AxiosInstance;
  constructor() {
    this.client = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    });
    this.client.interceptors.request.use(
      this.requestFullFilled,
      this.requestError
    );
    this.client.interceptors.response.use(
      this.responseFullfilled,
      this.responseError
    );
  }

  requestFullFilled(
    config: InternalAxiosRequestConfig<any>
  ): InternalAxiosRequestConfig<any> {
    const access = localStorage.getItem('access');
    if (access) {
      config.headers.set('Authorization', `Bearer ${access}`);
    }
    return config;
  }

  requestError() {
    return Promise.reject();
  }
  responseFullfilled(response: AxiosResponse<any>) {
    return response;
  }
  responseError(e: AxiosError<any>) {
    /** 에러 처리 */
    return new Promise((res, rej) => rej(e));
  }
}

const client = new AxiosClient().client;

export default client;