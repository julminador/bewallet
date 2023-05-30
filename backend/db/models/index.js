import { Account, AccountSchema } from './accounts.cjs';
import { Note, NoteSchema } from './notes.cjs';

export function setupModels(sequelize) {
  Account.init(AccountSchema, Account.config(sequelize));
  Note.init(NoteSchema, Note.config(sequelize));

  Account.associate(sequelize.models);
  Note.associate(sequelize.models);
}

export default setupModels;