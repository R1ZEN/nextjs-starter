import express from 'express';
import { deviceTypeMiddleware } from './middleware/device-type-middleware';
import { renderPageMiddleware } from './middleware/render-page-middleware';
import { nextServerMiddleware } from './middleware/next-server-middleware';

global.server = express();

const PORT = process.env.PORT;

(async function main() {
  try {
    global.server.use(deviceTypeMiddleware);
    global.server.use(nextServerMiddleware);
    global.server.use(renderPageMiddleware);

    global.server.listen(PORT, () => {
      console.log(`> Ready on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
