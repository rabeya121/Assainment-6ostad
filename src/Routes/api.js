// src/Routes/api.js
const express = require('express');
const router = express.Router();

const {
  create,
  read,
  delete: deleteBlog, 
  update,
} = require('../Controllers/blogController');


router.get('/blog/create', create);
router.get('/blog/read', read);
router.get('/blog/delete', deleteBlog);
router.get('/blog/update', update);


module.exports = router;
