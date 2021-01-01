import * as e from 'express';
/**
 * Serve assets files
 * @param req
 * @param res
 * @param next
 */
export const assetsMiddleware: e.RequestHandler = async (req, res, next) => {
  const handle = global.nextServer.getRequestHandler();

  if (/^\/_next/.test(req.url)) {
    await handle(req, res);

    return;
  }

  next();
};
