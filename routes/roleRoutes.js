/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const roleController = require('../controller/roleController')

/**
 * application routes
 */
router.get('/getRoles', roleController.getRoles)


module.exports = router;