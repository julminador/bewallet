import boom from "@hapi/boom";
import AccountService from "../services/accounts.js";

const service = new AccountService();

export async function getAccounts(req, res, next) {
  try {
    if (req.params.id) {
      const accounts = await service.findOne(req.params.id);
      res.status(200).json({ accounts })
    } else {
      const accounts = await service.find();
      res.status(200).json({ accounts })
    }
  } catch (error) {
    next(error);
  }
}

export default { getAccounts };