import boom from "@hapi/boom";
import NoteService from "../../services/notes/notes.js";
import { Sequelize } from "sequelize";

const service = new NoteService();

/**
 * List the notes
 */
export async function getNotes(req, res, next) {
  try {
    const { noteId } = req.params;
    if (noteId) {
      const notes = await service.findOne(noteId);
      res.status(200).json({ notes })
    } else {
      const notes = await service.find();
      res.status(200).json({ notes })
    }
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new income note
 */
export async function createInconme(req, res, next) {
  try {
    const { body } = req;
    const data = {
      creditId: body.assetId,
      debitId: body.incomeId,
      credit: body.value,
      debit: body.value,
      date: body.date || Sequelize.fn('NOW'),
    }
    const note = await service.create(data);
    res.status(201).json({ note })
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new expense note
 */
export async function createExpense(req, res, next) {
  try {
    const { body } = req;
    const data = {
      creditId: body.expenseId,
      debitId: body.assetId,
      credit: body.value,
      debit: body.value,
      date: body.date || Sequelize.fn('NOW'),
    }
    const note = await service.create(data);
    res.status(201).json({ note })
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new movement note
 */
export async function createMovement(req, res, next) {
  try {
    const { body } = req;
    const data = {
      creditId: body.assetDestinationId,
      debitId: body.assetOriginId,
      credit: body.value,
      debit: body.value,
      date: body.date || Sequelize.fn('NOW'),
    }
    const note = await service.create(data);
    res.status(201).json({ note })
  } catch (error) {
    next(error);
  }
}

/**
 * Delete an note
 */
export async function deleteNote(req, res, next) {
  try {
    const { noteId } = req.params;
    const deletedNote = await service.delete(noteId);
    if (!deletedNote) throw boom.notFound('Product not found');
    res.status(200).json({ deletedNote })
  } catch (error) {
    next(error);
  }
}

export default { getNotes, createInconme, createExpense, createMovement, deleteNote };