const express = require('express');
const router = express.Router();

const usersControllers = require('../models/users');

router.get('/get:id',usersControllers.getUser);

module.exports = router;