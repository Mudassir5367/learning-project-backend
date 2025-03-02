const express = require('express');
const router = express.Router();
require('../db/db')

const rejister = require('../controllers/register' ) 
const login = require('../controllers/login' ) 

router.post('/api/register', rejister)
router.post('/api/login', login)

module.exports = router
