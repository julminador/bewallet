import boom from "@hapi/boom";
import ActiveService from "../services/actives.js";

const service = new ActiveService();

/**
 * Lista todos los activos
 */
export async function getActives(req, res, next) {
  try {
    const actives = await service.find();
    res.status(200).json({ actives })
  } catch (error) {
    next(error);
  }
}

/**
 * Crea una cuenta de tipo activo
 */
export async function createActive(req, res, next) {
  try {
    const { body } = req;
    const data = {
      ...body,
      active:1,
      income: 0,
      outcome: 0,
    }
    const newActive = await service.create(data);
    res.status(201).json({ newActive })
  } catch (error) {
    next(error);
  }
}

/**
 * Modifica una cuenta de tipo activo
 */
export async function updateActive(req, res, next) {
  try {
    const { accountId } = req.params;
    const { body } = req;
    const data = {
      accountId,
      ...body,
    }
    const updatedActive = await service.update(data);
    if (!updatedActive) throw boom.notFound('Product not found');
    res.status(200).json({ updatedActive })
  } catch (error) {
    next(error);
  }
}

/**
 * Elimina una cuenta de tipo activo
 */
export async function deleteActive(req, res, next) {
  try {
    const { accountId } = req.params;
    const deletedActive = await service.delete(accountId);
    if (!deletedActive) throw boom.notFound('Product not found');
    res.status(200).json({ deletedActive })
  } catch (error) {
    next(error);
  }
}

export default { getActives, createActive, updateActive, deleteActive };