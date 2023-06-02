import express from 'express';
import controller from "../controllers/accounts.js";

const router = express.Router();

router.get('/:id', controller.getAccounts);
router.get('/', controller.getAccounts);

export default router;