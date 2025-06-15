const post = require('../models/post.model')
const author = require('../models/author.model')

//GET
const getPostById = async (req, res) => {
    const {postId} = req.params

    const result = await post.selectById(postId)
    if(!result) return res.status(404)
        .json({message : 'The post does not exist'})

    const authorResult = await author.getAuthorById(result.authorId)
    
    res.json({
        result,
        authorResult
    })
}

const getPostsByCategory = async (req, res) => {
    //Get posts using category
    const [category] = req.params

    const result = await post.selectByCategory(category)
    if(!result) return res.status(404)
        .json({message : 'There are no posts with this category'})

    res.json(result)
}

const getPostsByAuthor = async (req, res) => {
    const [authorId] = req.params

    const result = await post.selectByCategory(authorId)
    if(!result) return res.status(404)
        .json({message : 'The author has no posts'})

    res.json(result)
}


//POST
const createPost = async (req, res) => {
    //Create post
    const result = await post.create(req.body)
    const postResult = await post.selectById(result.id)
    res.json(postResult)
}


//PUT


//DELETE


module.exports = { 
    getPostById,
    getPostsByAuthor,
    getPostsByCategory,
    createPost
 }