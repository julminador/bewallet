const { Model, DataTypes, Sequelize } = require('sequelize');

const ACCOUNT_TABLE = 'accounts';

const AccountSchema = {
  accountId: {
    field: 'account_id',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  account: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  active: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  income: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  outcome: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    allowNull: true,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: Sequelize.NOW,
  },
}

class Account extends Model {
  static associate(models) {
    this.hasMany(models.Note, {
      as: 'credit',
      foreignKey: 'creditId'
    });

    this.hasMany(models.Note, {
      as: 'debit',
      foreignKey: 'debitId'
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: ACCOUNT_TABLE,
      modelName: 'Account',
    }
  }
}

module.exports = { ACCOUNT_TABLE, AccountSchema, Account };