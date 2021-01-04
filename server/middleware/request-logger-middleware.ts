import url from 'url';
import { RequestHandler } from 'express';
import { logger } from '../logger/logger';

/**
 * Log request
 */
export const requestLoggerMiddleware: RequestHandler = (req, res, next) => {
  const reqUrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl || '/',
  });

  logger.network({
    msg: 'Request start',
    method: req.method,
    url: reqUrl,
    headers: req.headers,
  });

  const renderFinish = () => {
    logger.network({
      msg: 'Request finished',
      method: req.method,
      status: res.statusCode,
      url: reqUrl,
      headers: req.headers,
    });

    res.off('close', renderFinish);
    res.off('finish', renderFinish);
  };

  res.once('close', renderFinish);
  res.once('finish', renderFinish);

  next();
};
