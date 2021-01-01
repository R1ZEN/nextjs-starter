import next from 'next';
import express from 'express';
import path from 'path';
import { isDevEnv } from './utils/isDevEnv';
import { deviceTypeMiddleware } from './middleware/device-type-middleware';
import { renderPageMiddleware } from './middleware/render-page-middleware';
import { assetsMiddleware } from './middleware/assets-middleware';

global.server = express();
global.nextServer = next({
  dev: isDevEnv,
  dir: path.join(__dirname, '..', '..'),
});

const PORT = 3000;

(async function main() {
  try {
    await global.nextServer.prepare();

    global.server.use(assetsMiddleware);
    global.server.use(deviceTypeMiddleware);
    global.server.use(renderPageMiddleware);

    global.server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
