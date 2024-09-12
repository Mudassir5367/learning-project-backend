const express = require('express');
const router = express.Router();
require('../db/db')

const rejister = require('../controllers/register' ) 

router.post('/api/register', rejister)

module.exports = router
