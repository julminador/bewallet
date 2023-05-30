import boom from "@hapi/boom";
import sequelize from '../libs/sequelize.js';

export class Accouts {
  constructor() {};

  create() {};
  async find() {
    const [data] = await sequelize.query('SELECT * FROM accounts');
    return data;
  };
  findOne() {
    // if (!data || data.array) throw boom.notFound('Product not found');
  };
  update() {};
  delete() {};
}

export default Accouts;