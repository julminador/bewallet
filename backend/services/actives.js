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
    const updatedActive = await models.Account.update(data, {
      where: { accountId: data.accountId },
    });
    return updatedActive;
  };

  async delete(accountId) {
    const deletedActive = await models.Account.destroy({
      where: { accountId },
    });
    return deletedActive;
  };
}

export default Actives;