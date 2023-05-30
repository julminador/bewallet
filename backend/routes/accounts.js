import express from 'express';
import accountCtrl from "../controllers/accounts.js";

const router = express.Router();

router.get('/', accountCtrl.getAllAccounts);

//create res.status(201).json({})
//not found res.status(404).json({})

export default router;