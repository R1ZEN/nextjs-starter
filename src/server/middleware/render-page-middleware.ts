import * as e from 'express';
import { parse } from 'url';

/**
 * Render Page
 * @param req
 * @param res
 */
export const renderPageMiddleware: e.RequestHandler = async (req, res) => {
  const parsedUrl = parse(req.url, true);
  let { pathname } = parsedUrl;

  if (req.isDesktop && !/^\/desktop/.test(pathname)) {
    pathname = pathname === '/' ? '' : pathname;
    pathname = `/desktop${pathname}`;
  }

  if (req.isMobile && !/^\/mobile/.test(pathname)) {
    pathname = pathname === '/' ? '' : pathname;
    pathname = `/mobile${pathname}`;
  }

  const html = await global.nextServer.renderToHTML(req, res, pathname);

  res.send(html);
};
