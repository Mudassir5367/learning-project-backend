const express = require('express');
const router = express.Router();
require('../db/db')
const authentication = require('../middleware/authentication')

const rejister = require('../controllers/register' ) 
const login = require('../controllers/login' ) 
const allPosts = require('../controllers/all_posts_in_backend' ) 
const getAllPosts = require('../controllers/getAllPosts' ) 

router.post('/api/register', rejister)
router.post('/api/login', login)
router.post('/api/allPosts', allPosts)
router.get('/api/getAllPosts', authentication, getAllPosts)

module.exports = router
