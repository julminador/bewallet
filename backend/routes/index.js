import express from 'express';
import accounts from './accounts.js';

const routes = function (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/accounts', accounts);
}

export default routes;