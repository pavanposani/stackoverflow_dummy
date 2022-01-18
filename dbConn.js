const Sequelize = require('sequelize');
const dbConfig = require("./config.js");
var config = require('./config')['dev'];

const sequelize = new Sequelize(config.dbConfig.database,
   config.dbConfig.user, config.dbConfig.password, {
  host: config.dbConfig.server,
  dialect: 'mssql',
  dialectOptions: {
    encrypt: true
  }
});

module.exports = sequelize;
