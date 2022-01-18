const { Sequelize, Model, DataTypes } = require("sequelize");
var sequelize = require('../dbConn');


const Post = sequelize.define('User', {
  AboutMe:{
    type: DataTypes.STRING,
  },
  Age:{
    type: DataTypes.INTEGER,
  },
  CreationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  DisplayName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  DownVotes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  EmailHash: {
    type: DataTypes.STRING,
  },
  LastAccessDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Location: {
    type: DataTypes.STRING,
  },
  Reputation: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  UpVotes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  Views:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  WebsiteUrl:{
    type: DataTypes.STRING,
  },
  AccountId:{
    type: DataTypes.INTEGER,
  }
});
module.exports = Post;
