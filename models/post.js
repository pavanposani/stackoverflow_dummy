const { Sequelize, Model, DataTypes } = require("sequelize");
var sequelize = require('../dbConn');

const Post = sequelize.define('Post', {

    AcceptedAnswerId: {
      type: DataTypes.STRING,
    },
    AnswerCount: {
      type: DataTypes.INTEGER,
    },
    Body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ClosedDate: {
      type: DataTypes.DATE,
    },
    CommentCount: {
      type: DataTypes.INTEGER,
    },
    CommunityOwnedDate: {
      type: DataTypes.STRING,
    },
    CreationDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    FavoriteCount: {
      type: DataTypes.INTEGER,
    },
    LastActivityDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    LastEditDate: {
      type: DataTypes.DATE,
    },
    LastEditorUserId: {
      type: DataTypes.INTEGER,
    },
    OwnerUserId: {
      type: DataTypes.INTEGER,
    },
    ParentId: {
      type: DataTypes.INTEGER,
    },
    PostTypeId:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    Score: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    Tags: {
      type: DataTypes.STRING,
    },
    Title:{
        type: DataTypes.STRING,
    },
    ViewCount:{
        type: DataTypes.INTEGER,
    }
},{
  timestamps: false
});

module.exports = Post;
