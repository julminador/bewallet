import boom from "@hapi/boom";
import IncomeService from "../services/income.js";

const service = new IncomeService();

/**
 * List the income account
 */
export async function getIncome(req, res, next) {
  try {
    const income = await service.find();
    res.status(200).json({ income })
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new income account
 */
export async function createIncome(req, res, next) {
  try {
    const { body } = req;
    const data = {
      ...body,
      active: 0,
      income: 1,
      expense: 0,
    }
    const newIncome = await service.create(data);
    res.status(201).json({ newIncome })
  } catch (error) {
    next(error);
  }
}

/**
 * Update an income account
 */
export async function updateIncome(req, res, next) {
  try {
    const { accountId } = req.params;
    const { body } = req;
    const data = {
      accountId,
      ...body,
    }
    const updatedIncome = await service.update(data);
    if (!updatedIncome) throw boom.notFound('Product not found');
    res.status(200).json({ updatedIncome })
  } catch (error) {
    next(error);
  }
}

export default { getIncome, createIncome, updateIncome };