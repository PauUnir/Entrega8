const author = require('../models/author.model');

//GET
const getAuthorById = async (req, res) => {
    //Gets author by its id
    const {authorId} = req.params

    const result = await author.getAuthorById(authorId)
        if(!result) return res.status(404)
            .json({message : 'The author does not exist'})
    
        res.json(result)
}


//POST
const createAuthor = async (req, res) => {
    //Creates a new Author
    const result = await author.createAuthor(req.body)
    const authorResult = await author.getAuthorById(result.insertId)

    res.json(authorResult)
}

//PUT


//DELETE

module.exports = { 
    getAuthorById,
    createAuthor
 }