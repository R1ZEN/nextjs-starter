import Axios from 'axios';

export interface ILogRequestOptions {
  msg?: string;
  method?: string;
  url?: string;
  status?: string | number;
  host?: string;
  headers?: unknown;
  data?: unknown;
  error?: unknown;
  stack?: unknown;
}

/**
 * Return log string in particular format
 * Format: status=200 message=Info requestId=uid ...
 */
export const getLogString = (options: ILogRequestOptions = {}) => {
  const defaultOptions = {
    requestId: Axios.defaults.headers.common['X-Request-Id'],
  };

  const logOptions = { ...defaultOptions, ...options };

  return (Object.keys(logOptions) as (keyof ILogRequestOptions)[]).reduce(
    (acc, key) => {
      if (!logOptions[key]) {
        return acc;
      }

      const value = JSON.stringify(logOptions[key]);

      return `${acc}${key}=${value} `;
    },
    ''
  );
};
