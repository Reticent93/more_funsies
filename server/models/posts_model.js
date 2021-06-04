import db from '../data/config.js'

const add = (post) => {
    const [id] = db('posts').insert(post)
    return findById(id)
}

const find = () => {
    return db('posts')
}

const findById = (id) => {
    return db('posts').where({id})
}

const update = (id, post) => {
    return db('posts').where(id).update(post)
}

const remove = (id) => {
    return db('posts').where({id}).del()
}


export default {add, find, findById, update, remove}