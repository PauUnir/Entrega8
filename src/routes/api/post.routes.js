const { getPostById, createPost, getPostsByCategory } = require('../../controllers/post.controller');

const router = require('express').Router();

// Define your routes here

//GET
router.get('/:postId', getPostById)

router.get('/:category', getPostsByCategory)
router.get('/authorId',)


//POST
router.post('', createPost)

//PUT


//DELETE

module.exports = router;