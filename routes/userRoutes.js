/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/**
 * application routes
 */
router.post('/register',userController.register)
router.post('/authenticate',userController.authenticate)
router.get('/getUsersList',userController.getUsersList)
router.get('/getUser/:User',userController.getUser)

module.exports = router;