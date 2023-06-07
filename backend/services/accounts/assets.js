import sequelize from '../../libs/sequelize.js';

const { models } = sequelize;

export class Assets {
  constructor() {};

  async create (data) {
    const newAsset = await models.Account.create(data);
    return newAsset;
  }

  async find() {
    const assets = await models.Account.findAll({
      where: { asset : true },
    });
    return assets;
  };

  async update(data) {
    const updatedAsset = await models.Account.update(data, {
      where: { accountId: data.accountId },
    });
    return updatedAsset;
  };
}

export default Assets;