/**
 * importing required modules 
 */
const express = require('express');
const router = express.Router();
const pocHistoryController = require('../controller/pocHistoryController')

/**
 * application routes
 */
router.get('/getPocHistory/:POCId', pocHistoryController.getPOCHistory)

module.exports = router;