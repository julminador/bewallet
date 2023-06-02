import express from 'express';
import accounts from './accounts.js';
import actives from './actives.js';

const routes = function (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/accounts', accounts);
  router.use('/actives', actives);
}

export default routes;