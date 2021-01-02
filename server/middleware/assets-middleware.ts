import * as e from 'express';
import { isPlatformDesktop } from '../utils/isPlatformDesktop';
import { isPlatformMobile } from '../utils/isPlatformMobile';

/**
 * Serve assets files
 * @param req
 * @param res
 * @param next
 */
export const assetsMiddleware: e.RequestHandler = async (req, res, next) => {
  if (/^\/_next/.test(req.url)) {
    if (isPlatformDesktop) {
      await global.nextDesktopServer.getRequestHandler()(req, res);
    } else if (isPlatformMobile) {
      await global.nextMobileServer.getRequestHandler()(req, res);
    } else {
      if (req.isDesktop) {
        await global.nextDesktopServer.getRequestHandler()(req, res);
      }

      if (req.isMobile) {
        await global.nextMobileServer.getRequestHandler()(req, res);
      }
    }

    return;
  }

  next();
};
