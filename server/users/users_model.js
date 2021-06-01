import db from '../data/config.js'

async function add(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function find() {
    return db('users').select('id', 'name')
}

function findById(id) {
    return db('users').where({id}).first()
}

export default {add, find, findById}