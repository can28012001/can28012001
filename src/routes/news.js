const express = require('express')
const router = express.Router()

const newsController = require('../app/controllers/NewController')

router.get('/',newsController.index)
router.get('/:slug',newsController.show)

module.exports = router

