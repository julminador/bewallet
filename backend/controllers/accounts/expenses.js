import boom from "@hapi/boom";
import ExpensesService from "../../services/accounts/expenses.js";

const service = new ExpensesService();

/**
 * List the expense account
 */
export async function getExpenses(req, res, next) {
  try {
    const expense = await service.find();
    res.status(200).json({ expense })
  } catch (error) {
    next(error);
  }
}

/**
 * Create a new expense account
 */
export async function createExpense(req, res, next) {
  try {
    const { body } = req;
    const data = {
      ...body,
      active: 0,
      income: 0,
      expense: 1,
    }
    const newExpense = await service.create(data);
    res.status(201).json({ newExpense })
  } catch (error) {
    next(error);
  }
}

/**
 * Update an expense account
 */
export async function updateExpense(req, res, next) {
  try {
    const { accountId } = req.params;
    const { body } = req;
    const data = {
      accountId,
      ...body,
    }
    const updatedExpense = await service.update(data);
    if (!updatedExpense) throw boom.notFound('Product not found');
    res.status(200).json({ updatedExpense })
  } catch (error) {
    next(error);
  }
}

export default { getExpenses, createExpense, updateExpense };