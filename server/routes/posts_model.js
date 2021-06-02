import db from '../data/config.js'

const add = (post) => {
    const [id] = db('posts').insert(post)
    return findByUserId(id)
}

const find = () => {
    return db('posts')
}

const findByUserId = (id) => {
    return db('posts as p')
        .join('users as u', 'u.id', 'p.user_id')
        .where('p.user_id', id)
        .select('p.id', 'p.contents', 'u.name')
}



export default {add, find, findByUserId}