const Sequelize = require('sequelize');
const dbConfig = require("./config.js");
const db = {};
const sequelize = new Sequelize('StackDB', 'SA', 'MyPass@word', {
  host: '127.0.0.1',
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

module.exports = sequelize;
