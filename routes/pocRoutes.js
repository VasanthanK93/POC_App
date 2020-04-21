/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const pocController = require('../controller/pocController')

/**
 * application routes
 */
router.get('/getPocList', pocController.getPocAll)
router.get('/getPocTeam/:Team', pocController.getPocTeam)
router.post('/addPoc/:Team', pocController.addPoc)
router.put('/editPoc/:Team', pocController.editPoc)

module.exports = router;