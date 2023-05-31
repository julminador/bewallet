"use strict";
const { DataTypes, Sequelize } = require('sequelize');

const { ACCOUNT_TABLE } = require('../models/accounts.cjs');
const { NOTE_TABLE } = require('../models/notes.cjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ACCOUNT_TABLE, {
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
    });

    await queryInterface.createTable(NOTE_TABLE, {
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
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACCOUNT_TABLE);
    await queryInterface.dropTable(NOTE_TABLE);
  },
};