const { getPostById, createPost, getPostsByAuthor } = require('../../controllers/post.controller');

const router = require('express').Router();

// Define your routes here

//GET
router.get('/:postId', getPostById)

router.get('/autor/:authorId', getPostsByAuthor)


//POST
router.post('', createPost)

//PUT


//DELETE

module.exports = router;