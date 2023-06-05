import express from 'express';
import accounts from './accounts/accounts.js';
import actives from './accounts/actives.js';
import income from './accounts/income.js';
import expenses from './accounts/expenses.js';

const routes = function (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/accounts', accounts);
  router.use('/accounts/actives', actives);
  router.use('/accounts/income', income);
  router.use('/accounts/expenses', expenses);
}

export default routes;