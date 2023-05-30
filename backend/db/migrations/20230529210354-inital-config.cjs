"use strict";

const { AccountSchema, ACCOUNT_TABLE } = require('../models/accounts.cjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ACCOUNT_TABLE, AccountSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACCOUNT_TABLE);
  },
};