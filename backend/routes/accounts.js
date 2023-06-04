import express from 'express';
import controller from "../controllers/accounts.js";

const router = express.Router();

router.get('/:accountId', controller.getAccounts);
router.get('/', controller.getAccounts);
router.delete('/:accountId', controller.deleteAccount);

export default router;