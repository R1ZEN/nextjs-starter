import { createWinstonLogger } from './create-winston-logger';
import { ILogRequestOptions } from './get-log-string';

const { infoLogger, errorLogger, networkLogger } = createWinstonLogger();

export const logger = {
  info: (msg: ILogRequestOptions) => {
    infoLogger.info(msg);
  },
  warn: (msg: ILogRequestOptions) => {
    infoLogger.warn(msg);
  },
  network: (msg: ILogRequestOptions) => {
    networkLogger.network(msg);
  },
  error: (msg: ILogRequestOptions) => {
    errorLogger.error(msg);
  },
};
