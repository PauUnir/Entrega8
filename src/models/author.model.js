const db = require('../config/db')

const getAuthorById = async (authorId) => {
    const[result] = await db.query('SELECT * FROM autor WHERE id = ?' [authorId])
    if(result.lenght === 0) return null
    return result[0]
}

const createAuthor = async ({name, email, image}) => {
    const [result] = await db.query(`
        INSERT INTO autor (nombre, email, imagen) values (?,?,?)
        `, [name, email, image])
        return result
}


module.exports = {
    getAuthorById,
    createAuthor
}