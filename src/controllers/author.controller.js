const author = require('../models/author.model')

//GET
const getAuthorById = async (res, req) => {
    //Gets author by its id
    const [authorId] = req.params

    const result = await post.getAuthorById(authorId)
        if(!result) return res.status(404)
            .json({message : 'The author does not exist'})
    
        res.json(result)
}


//POST
const createAuthor = async (res, req) => {
    //Creates a new Author
    const result = await author.createAuthor(req.body)
    const authorResult = await author.getAuthorById(result.authorId)

    res.json(authorResult)
}

//PUT


//DELETE

module.exports = { 
    getAuthorById,
    createAuthor
 }