import sequelize from '../../libs/sequelize.js';

const { models } = sequelize;

export class Expenses {
  constructor() {};

  async create (data) {
    const newExpense = await models.Account.create(data);
    return newExpense;
  }

  async find() {
    const expenses = await models.Account.findAll({
      where: { expense : true },
    });
    return expenses;
  };

  async update(data) {
    const expense = await models.Account.update(data, {
      where: { accountId: data.accountId },
    });
    return expense;
  };
}

export default Expenses;