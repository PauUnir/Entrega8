const db = require('../config/db')

//Get posts using ID
const selectById = async (postId) => {
    const[result] = await db.query('SELECT * FROM post WHERE id = ?', [postId])
    if(result.length === 0) return null
    return result[0]
}


//Get all posts from author
const getPostsByAuthor = async (authorId) => {
    const[result] = await db.query('SELECT * FROM post WHERE autor_id = ?', [authorId])
    if(result.length === 0) return null
    return result
}

const create = async ({title, description, authorId, category}) => {
    const[result] = await db.query(`
        INSERT INTO post (titulo, descripcion, creacion, autor_id, categoria) values (?,?,?,?,?)
        `, [title, description, new Date(), authorId, category])
    return await db.query("SELECT * FROM post WHERE id = ?", [result.insertId])

}


module.exports = {
    selectById,
    getPostsByAuthor,
    create
}