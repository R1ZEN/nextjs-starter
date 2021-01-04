import * as e from 'express';
import url from 'url';
import { isPlatformDesktop } from '../utils/is-platform-desktop';
import { isPlatformMobile } from '../utils/is-platform-mobile';

/**
 * Render Page
 * @param req
 * @param res
 */
export const renderPageMiddleware: e.RequestHandler = async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (isPlatformDesktop) {
    await global.nextDesktopServer.getRequestHandler()(req, res, parsedUrl);
  } else if (isPlatformMobile) {
    await global.nextMobileServer.getRequestHandler()(req, res, parsedUrl);
  } else {
    if (req.isDesktop) {
      await global.nextDesktopServer.getRequestHandler()(req, res, parsedUrl);
    }

    if (req.isMobile) {
      await global.nextMobileServer.getRequestHandler()(req, res, parsedUrl);
    }
  }
};
