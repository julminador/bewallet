import boom from "@hapi/boom";
import sequelize from '../libs/sequelize.js';

const { models } = sequelize;
export class Accounts {
  constructor() {};

  async find() {
    const accounts = await models.Account.findAll();
    return accounts;
  };

  async findOne(id) {
    const accounts = await models.Account.findByPk(id);
    if (!accounts) throw boom.notFound('Product not found');
    return accounts;
  };
}

export default Accounts;