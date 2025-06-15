const { getAuthorById, createAuthor } = require('../../controllers/author.controller');

const router = require('express').Router();

// Define your routes here

//GET
router.get('/:authorId', getAuthorById)

//POST
router.post('/', createAuthor)

//PUT


//DELETE

module.exports = router;