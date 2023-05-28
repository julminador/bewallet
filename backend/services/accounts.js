import boom from "@hapi/boom";

class Accouts {
  constructor() {};

  create() {};
  async find() {
    if (!true) {
      throw boom.notFound('Product not found');
    }
  };
  findOne() {};
  update() {};
  delete() {};
}