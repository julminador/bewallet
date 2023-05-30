"use strict";

const { AccountSchema, ACCOUNT_TABLE } = require('../models/accounts.cjs');
const { NoteSchema, NOTE_TABLE } = require('../models/notes.cjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ACCOUNT_TABLE, AccountSchema);
    await queryInterface.createTable(NOTE_TABLE, NoteSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ACCOUNT_TABLE);
    await queryInterface.dropTable(NOTE_TABLE);
  },
};