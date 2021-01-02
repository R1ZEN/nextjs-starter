import * as e from 'express';
import { parse } from 'url';
import { isPlatformDesktop } from '../utils/isPlatformDesktop';
import { isPlatformMobile } from '../utils/isPlatformMobile';

/**
 * Render Page
 * @param req
 * @param res
 */
export const renderPageMiddleware: e.RequestHandler = async (req, res) => {
  const parsedUrl = parse(req.url, true);
  let { pathname } = parsedUrl;

  let html = '';
  if (isPlatformDesktop) {
    html = await global.nextDesktopServer.renderToHTML(req, res, pathname);
  } else if (isPlatformMobile) {
    html = await global.nextMobileServer.renderToHTML(req, res, pathname);
  } else {
    if (req.isDesktop) {
      html = await global.nextDesktopServer.renderToHTML(req, res, pathname);
    }

    if (req.isMobile) {
      html = await global.nextMobileServer.renderToHTML(req, res, pathname);
    }
  }

  res.send(html);
};
