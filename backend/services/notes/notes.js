import boom from "@hapi/boom";
import sequelize from '../../libs/sequelize.js';

const { models } = sequelize;
export class Notes {
  constructor() {};

  async find() {
    const notes = await models.Note.findAll();
    return notes;
  };

  async findOne(id) {
    const notes = await models.Note.findByPk(id, {
      include: ['creditAccount', 'debitAccount']
    });
    if (!notes) throw boom.notFound('Product not found');
    return notes;
  };

  async create (data) {
    const newNote = await models.Note.create(data);
    return newNote;
  }

  async delete(noteId) {
    const deletedAsset = await models.Note.destroy({
      where: { noteId },
    });
    return deletedAsset;
  };
}

export default Notes;