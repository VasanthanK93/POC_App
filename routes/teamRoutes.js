/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const teamController = require('../controller/teamController')

/**
 * application routes
 */
router.get('/getTeams', teamController.getTeams)


module.exports = router;