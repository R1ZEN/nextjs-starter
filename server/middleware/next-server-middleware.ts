import createNextServer from 'next';
import { RequestHandler } from 'express';
import { isDevEnv } from '../utils/isDevEnv';
import { APP_DESKTOP, APP_MOBILE } from '../../configs/app.path';
import { isPlatformDesktop } from '../utils/isPlatformDesktop';
import { isPlatformMobile } from '../utils/isPlatformMobile';

global.nextDesktopServer = createNextServer({
  dev: isDevEnv,
  dir: APP_DESKTOP,
  customServer: true,
});

global.nextMobileServer = createNextServer({
  dev: isDevEnv,
  dir: APP_MOBILE,
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
