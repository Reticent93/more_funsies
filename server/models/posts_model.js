import db from '../data/config.js'

async function add(post){
    const [id] = await db('posts').insert(post)
    return findById(id)
}

function find(){
    return db('posts')
}

function findById(id){
    return db('posts').where({id: Number(id) }).first()
}

function update(id, changes) {
    return db('posts').where('id', Number(id)).update(changes)
}

function remove(id) {
    return db('posts').where('id', Number(id)).del()
}

export default {add, find, findById, update, remove}