import express from 'express';
import ip from 'ip';
import { logger } from './logger/logger';
import { isDevEnv } from './utils/is-dev-env';
import { patchAxiosWithServerLogger } from './utils/patch-axios-with-server-logger';
import { deviceTypeMiddleware } from './middleware/device-type-middleware';
import { renderPageMiddleware } from './middleware/render-page-middleware';
import { nextServerMiddleware } from './middleware/next-server-middleware';
import { requestIdMiddleware } from './middleware/request-id-middleware';
import { requestLoggerMiddleware } from './middleware/request-logger-middleware';

patchAxiosWithServerLogger();

const PORT = process.env.PORT;

(async function main() {
  try {
    global.server = express();
    global.server.use(requestIdMiddleware);
    global.server.use(requestLoggerMiddleware);
    global.server.use(deviceTypeMiddleware);
    global.server.use(nextServerMiddleware);
    global.server.use(renderPageMiddleware);

    global.server.listen(PORT, () => {
      if (isDevEnv) {
        logger.info({ msg: `> Network: http://${ip.address()}:${PORT}` });
      }

      logger.info({ msg: `> Local: http://localhost:${PORT}` });
    });
  } catch (error) {
    logger.error(error);
  }
})();
