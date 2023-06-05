import express from 'express';
import controller from "../../controllers/accounts/income.js";

const router = express.Router();

router.get('/', controller.getIncome);
router.post('/', controller.createIncome);
router.patch('/:accountId', controller.updateIncome);

export default router;