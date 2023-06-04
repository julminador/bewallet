import express from 'express';
import controller from "../controllers/expenses.js";

const router = express.Router();

router.get('/', controller.getExpenses);
router.post('/', controller.createExpense);
router.patch('/:accountId', controller.updateExpense);

export default router;