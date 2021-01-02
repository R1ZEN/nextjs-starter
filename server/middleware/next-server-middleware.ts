import createNextServer from 'next';
import { RequestHandler } from 'express';
import { isDevEnv } from '../utils/isDevEnv';
import { isPlatformDesktop } from '../utils/isPlatformDesktop';
import { isPlatformMobile } from '../utils/isPlatformMobile';

global.nextDesktopServer = createNextServer({
  dev: isDevEnv,
  dir: process.env.BUILD_DESKTOP_APP_PATH,
  customServer: true,
});

global.nextMobileServer = createNextServer({
  dev: isDevEnv,
  dir: process.env.BUILD_MOBILE_APP_PATH,
  customServer: true,
});

let runOnce = false;
export const nextServerMiddleware: RequestHandler = async (req, res, next) => {
  if (!runOnce) {
    if (isPlatformDesktop) {
      await global.nextDesktopServer.prepare();
    } else if (isPlatformMobile) {
      await global.nextMobileServer.prepare();
    } else {
      await Promise.all([
        global.nextDesktopServer.prepare(),
        global.nextMobileServer.prepare(),
      ]);
    }

    runOnce = true;
  }

  next();
};
