import { Account, AccountSchema } from './accounts.cjs';

export function setupModels(sequelize) {
  Account.init(AccountSchema, Account.config(sequelize));

  // Account.associate(sequelize.models);
}

export default setupModels;