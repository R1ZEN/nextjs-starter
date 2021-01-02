import express from 'express';
import { deviceTypeMiddleware } from './middleware/device-type-middleware';
import { renderPageMiddleware } from './middleware/render-page-middleware';
import { assetsMiddleware } from './middleware/assets-middleware';
import { nextServerMiddleware } from './middleware/next-server-middleware';
import { isPlatformDesktop } from './utils/isPlatformDesktop';
import { isPlatformMobile } from './utils/isPlatformMobile';

global.server = express();

const PORT = isPlatformDesktop
  ? process.env.APP_DESKTOP_PORT
  : isPlatformMobile
  ? process.env.APP_MOBILE_PORT
  : process.env.APP_PROD_PORT;

(async function main() {
  try {
    global.server.use(deviceTypeMiddleware);
    global.server.use(nextServerMiddleware);
    global.server.use(assetsMiddleware);
    global.server.use(renderPageMiddleware);

    global.server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
