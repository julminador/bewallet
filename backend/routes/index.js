import express from 'express';
import accounts from './accounts.js';
import actives from './actives.js';
import income from './income.js';
import expenses from './expenses.js';

const routes = function (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/accounts', accounts);
  router.use('/actives', actives);
  router.use('/income', income);
  router.use('/expenses', expenses);
}

export default routes;