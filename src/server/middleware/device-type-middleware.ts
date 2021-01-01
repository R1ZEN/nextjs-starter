import * as e from 'express';
import parser from 'ua-parser-js';

/**
 * Extend requests with device type variable: isMobile, isDesktop, isTablet
 * @param req
 * @param res
 * @param next
 */
export const deviceTypeMiddleware: e.RequestHandler = (req, res, next) => {
  const ua = parser(req.headers['user-agent']);
  req.isDesktop = ua.device.type === undefined;
  req.isMobile = ua.device.type === 'mobile';
  req.isTablet = ua.device.type === 'tablet';

  next();
};
