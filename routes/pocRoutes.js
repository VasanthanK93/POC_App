const express = require('express');
const router = express.Router();

const pocController = require('../controller/pocController')

router.get('/getPocList',pocController.getPoc)

module.exports = router;