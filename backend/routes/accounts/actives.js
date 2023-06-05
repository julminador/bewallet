import express from 'express';
import controller from "../../controllers/accounts/actives.js";

const router = express.Router();

router.get('/', controller.getActives);
router.post('/', controller.createActive);
router.patch('/:accountId', controller.updateActive);
router.delete('/:accountId', controller.deleteActive);

export default router;