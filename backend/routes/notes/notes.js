import express from 'express';
import controller from "../../controllers/notes/notes.js";

const router = express.Router();

router.get('/:noteId', controller.getNotes);
router.get('/', controller.getNotes);
router.delete('/:noteId', controller.deleteNote);

router.post('/income', controller.createInconme);
router.post('/expense', controller.createExpense);
router.post('/movement', controller.createMovement);

export default router;