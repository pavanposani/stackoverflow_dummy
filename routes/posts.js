var express = require('express');
var router = express.Router();
var post_controller = require('../controller/postController');

router.get('/:id', post_controller.find_post_by_id);


module.exports = router;
