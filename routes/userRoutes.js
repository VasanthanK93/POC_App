/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

/**
 * application routes
 */
router.get('/getUsersList', userController.getUsersList)
router.get('/getUser/:User', userController.getUser)
router.put('/editUser/:User', userController.editUser)

module.exports = router;