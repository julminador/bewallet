import express from 'express';
import controller from "../../controllers/accounts/assets.js";

const router = express.Router();

router.get('/', controller.getAssets);
router.post('/', controller.createAsset);
router.patch('/:accountId', controller.updateAsset);
router.delete('/:accountId', controller.deleteAsset);

export default router;