import boom from "@hapi/boom";
import AccountService from "../services/accounts.js";

const service = new AccountService();

export async function getAllAccounts(req, res, next) {
  try {
    const accounts = await service.find();
    res.json({ accounts })
  } catch (error) {
    next(error);
  }
}

export default { getAllAccounts };