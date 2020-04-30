/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/**
 * application routes
 */
router.post('/register', userController.register)
router.post('/authenticate', userController.authenticate)
router.put('/resetPwd/:User', userController.resetPwd)

module.exports = router;