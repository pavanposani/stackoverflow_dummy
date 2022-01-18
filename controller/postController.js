
const { Op } = require("sequelize");
const { convert } = require('html-to-text');
var Post = require('../models/post');
var AllPost = require('../models/all_post');
var User = require('../models/user');

const sequelize= require("sequelize");


exports.find_post_by_id = async function (req, res, next) {
  try{

    const question_id = Number(req.params.id);
    const response = await AllPost.findByPk(question_id);

    if(response){
      response.dataValues.Body = convert(response.dataValues.Body);
    }
    const answers = await Post.findAll({

        attributes: ['AcceptedAnswerId', 'Body','Score', 'OwnerUserId'],
        where:{
          [Op.and]: [
            { ParentId: question_id},
            { PostTypeId: 2 } // llook for answer
          ]
        },
        order:[
          ['Score', 'DESC']
        ]
    });
    // console.log(question_id);
    // console.log(answers);
    if(answers){
      answers.map((post)=>{
        post.dataValues.Body = convert(post.dataValues.Body);
      });
    }
    res.render('post', { title: 'StackOverflow', response: response, answers: answers});
  }
  catch(error){
    console.log(error);
    next(error);
  }
};
