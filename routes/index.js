var express = require('express');
var router = express.Router();
var post_controller = require('../controller/searchController');


router.get('/', post_controller.find_all_posts);//{
router.get('/search', post_controller.find_all_posts);


module.exports = router;
