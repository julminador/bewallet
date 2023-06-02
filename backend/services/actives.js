import boom from "@hapi/boom";
import sequelize from '../libs/sequelize.js';

const { models } = sequelize;

export class Actives {
  constructor() {};

  async create (data) {
    const newActive = await models.Account.create(data);
    return newActive;
  }

  async find() {
    const actives = await models.Account.findAll({
      where: { active : true },
    });
    return actives;
  };

  async update(data) {
    const actives = await models.Account.update(data, {
      where: { accountId: data.accountId },
    });
    return actives;
  };

  async delete(accountId) {
    const actives = await models.Account.destroy({
      where: { accountId },
    });
    return actives;
  };
}

export default Actives;