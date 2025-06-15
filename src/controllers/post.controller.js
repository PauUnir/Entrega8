const post = require('../models/post.model')
const author = require('../models/author.model')

//GET
const getPostById = async (req, res) => {
    const {postId} = req.params

    const result = await post.selectById(postId)
    if(!result) return res.status(404)
        .json({message : 'The post does not exist'})

    const authorResult = await author.getAuthorById(result.autor_id)
    
    res.json({
        result,
        authorResult
    })
}

const getPostsByAuthor = async (req, res) => {
    const {authorId} = req.params

    const result = await post.getPostsByAuthor(authorId)
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
    createPost
 }