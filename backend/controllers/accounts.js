import boom from "@hapi/boom";
import AccountService from "../services/accounts.js";

const service = new AccountService();

/**
 * List the accounts
 */
export async function getAccounts(req, res, next) {
  try {
    const { accountId } = req.params;
    if (accountId) {
      const accounts = await service.findOne(accountId);
      res.status(200).json({ accounts })
    } else {
      const accounts = await service.find();
      res.status(200).json({ accounts })
    }
  } catch (error) {
    next(error);
  }
}

/**
 * Delete an account
 */
export async function deleteAccount(req, res, next) {
  try {
    const { accountId } = req.params;
    const deletedAccount = await service.delete(accountId);
    if (!deletedAccount) throw boom.notFound('Product not found');
    res.status(200).json({ deletedAccount })
  } catch (error) {
    next(error);
  }
}

export default { getAccounts, deleteAccount };