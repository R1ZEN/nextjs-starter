import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { logger } from '../logger/logger';

export const patchAxiosWithServerLogger = () => {
  const axiosCreate = Axios.create;
  Axios.create = function (config?: AxiosRequestConfig) {
    const instance = axiosCreate(config);

    instance.interceptors.request.use((request: AxiosRequestConfig) => {
      const method = (request.method || '').toUpperCase();
      const url = `${request.baseURL || ''}${(request.url || '').slice(1)}`;

      logger.network({
        method,
        url,
        data: request.data,
        headers: {
          ...request.headers.common,
          ...request.headers[request.method || ''],
        },
      });

      return request;
    });

    instance.interceptors.response.use((response: AxiosResponse) => {
      const method = (response.config.method || '').toUpperCase();
      const status = response.status;
      const url = `${response.config.baseURL || ''}${(
        response.config.url || ''
      ).slice(1)}`;

      if (status >= 500) {
        logger.error({
          method,
          status,
          url,
          data: response.data,
          headers: response.headers,
        });
      } else {
        logger.network({
          method,
          status,
          url,
          headers: response.headers,
        });
      }

      return response;
    });

    return instance;
  };
};
