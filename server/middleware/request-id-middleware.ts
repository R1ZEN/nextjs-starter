import { RequestHandler } from 'express';
import Axios from 'axios';
import { uuidv4 } from '../utils/uuid';

export const requestIdMiddleware: RequestHandler = (_req, _res, next) => {
  Axios.defaults.headers.common['X-Request-Id'] = uuidv4();

  next();
};
