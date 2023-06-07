import express from 'express';
import accounts from './accounts/accounts.js';
import assets from './accounts/assets.js';
import income from './accounts/income.js';
import expenses from './accounts/expenses.js';
import notes from './notes/notes.js';

const routes = function (app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/accounts/assets', assets);
  router.use('/accounts/income', income);
  router.use('/accounts/expenses', expenses);
  router.use('/accounts', accounts); // General router must be the last
  router.use('/notes', notes); // General router must be the last
}

export default routes;