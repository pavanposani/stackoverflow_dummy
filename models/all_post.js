const { Sequelize, Model, DataTypes } = require("sequelize");
var sequelize = require('../dbConn');


const AllPost = sequelize.define('VW_POSTS', {
    Body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Title:{
        type: DataTypes.STRING,
    },
    Score: {
        type: DataTypes.INTEGER,
        allowNull:false
    },
    AnswerCount: {
      type: DataTypes.INTEGER,
    },
    DisplayName:{
      type: DataTypes.STRING,
    }

},{
  timestamps: false
});
module.exports = AllPost;
