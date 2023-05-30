const { Model, DataTypes, Sequelize } = require('sequelize');

const { ACCOUNT_TABLE } = require('./accounts.cjs');

const NOTE_TABLE = 'notes';

const NoteSchema = {
  noteId: {
    field: 'note_id',
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  creditId: {
    field: 'credit_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACCOUNT_TABLE,
      key: 'account_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  debitId: {
    field: 'debit_id',
    allowNull: false,
    type: DataTypes.INTEGER,
    references: {
      model: ACCOUNT_TABLE,
      key: 'account_id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  credit: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  debit: {
    allowNull: false,
    type: DataTypes.FLOAT,
  },
  date: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
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

class Note extends Model {
  static associate(models) {
    this.belongsTo(models.Account, { as: 'creditAccount' });
    this.belongsTo(models.Account, { as: 'debitAccount' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: 'Note',
    }
  }
}

module.exports = { NOTE_TABLE, NoteSchema, Note };