import winston, { LeveledLogMethod, Logger } from 'winston';
import { isDevEnv } from '../utils/is-dev-env';
import { getLogString, ILogRequestOptions } from './get-log-string';

interface ILoggerInstance extends Logger {
  info: LeveledLogMethod;
  warn: LeveledLogMethod;
  network: LeveledLogMethod;
  error: LeveledLogMethod;
}

const logLevel = {
  levels: {
    info: 0,
    warn: 1,
    network: 2,
    error: 3,
  },
  colors: {
    info: 'green',
    warn: 'yellow',
    network: 'blue',
    error: 'red',
  },
};

const logFormat = winston.format.printf(
  ({ timestamp, message, stack, level }) => {
    const isoDate = new Date(timestamp).toISOString();
    const logMessage = stack
      ? stack
      : getLogString(message as ILogRequestOptions);
    const appLogPattern = `${isoDate} [${process.pid}] ${level} ${logMessage}`;

    return `${process.env.APP_NAME} | ${process.env.APP_ENV} | ${appLogPattern}`;
  }
);

const createLogFormat = () => {
  return isDevEnv
    ? winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.colorize(),
        winston.format.timestamp(),
        logFormat
      )
    : winston.format.combine(
        winston.format.errors({ stack: true }),
        winston.format.timestamp(),
        logFormat
      );
};

export function createWinstonLogger() {
  const infoLogger = winston.createLogger({
    level: 'info',
    levels: logLevel.levels,
    format: createLogFormat(),
    transports: [new winston.transports.Console({ level: 'info' })],
  }) as ILoggerInstance;

  const errorLogger = winston.createLogger({
    level: 'error',
    levels: logLevel.levels,
    format: createLogFormat(),
    transports: [new winston.transports.Console({ level: 'error' })],
  }) as ILoggerInstance;

  const networkLogger = winston.createLogger({
    level: 'network',
    levels: logLevel.levels,
    format: createLogFormat(),
  }) as ILoggerInstance;

  networkLogger.add(
    new winston.transports.Console({ level: 'network', silent: isDevEnv })
  );

  if (isDevEnv) {
    winston.addColors(logLevel.colors);
  }

  return { infoLogger, errorLogger, networkLogger };
}
