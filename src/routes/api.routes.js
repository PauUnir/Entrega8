const router = require('express').Router();

// Define your routes here
router.use('/author', require('./api/author.routes'))
router.use('/post', require('./api/author.routes'))


module.exports = router;