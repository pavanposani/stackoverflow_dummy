const { Op } = require("sequelize");
const { convert } = require('html-to-text');
var AllPost = require('../models/all_post');

exports.find_all_posts = async function (req, res, next) {
  try{
    const question = req.query.question;
    let limit = req.query.size || 10;
    let page = req.query.page || 1;    // 10 records per page
    let offset = (limit * page) - limit;
    let response;
    let path;
    if(question){
       response = await AllPost.findAll({
        limit: limit,
        offset : offset,
        where: {
            [Op.or]: [
             {
               Title: {
                 [Op.substring]: question
               }
             },
             {
               Body: {
                 [Op.substring]: question
               }
             }
           ]
        }
      });
      path = req.path+"?question="+question
    }
    else {
      response = await AllPost.findAll({
        limit: limit,
        offset : offset
      });
      path = req.path+"?question="
    }
    // console.log("count"+response.count);
    // console.log(response.rows);
    response.count=10000; // change it to query
    //response.rows
    response.map((post )=>{
      // console.log(post);
      post.dataValues.Body = convert(post.dataValues.Body);
    })

    res.render('index', { title: 'Express', path: path, response: response,
    currentPage: page, pages: Math.ceil(response.count/limit)});
  }
  catch(error){
    console.log(error);
    next(error);
  }
};
