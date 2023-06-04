import sequelize from '../libs/sequelize.js';

const { models } = sequelize;

export class Income {
  constructor() {};

  async create (data) {
    const newIncome = await models.Account.create(data);
    return newIncome;
  }

  async find() {
    const income = await models.Account.findAll({
      where: { income : true },
    });
    return income;
  };

  async update(data) {
    const income = await models.Account.update(data, {
      where: { accountId: data.accountId },
    });
    return income;
  };
}

export default Income;