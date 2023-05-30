import boom from "@hapi/boom";
import sequelize from '../libs/sequelize.js';

export class Accouts {
  constructor() {};

  create() {};
  async find() {
    const [data] = await sequelize.query("SELECT *,(IFNULL(credit,0)-IFNULL(debit,0))*IF(`active`,1,-1) balance FROM accounts LEFT JOIN (SELECT debit_id account_id,SUM(debit) debit FROM notes GROUP BY 1 ) debit USING(account_id) LEFT JOIN (SELECT credit_id account_id,SUM(credit) credit FROM notes GROUP BY 1) credit USING(account_id);");
    return data;
  };
  findOne() {
    // if (!data || data.array) throw boom.notFound('Product not found');
  };
  update() {};
  delete() {};
}

export default Accouts;