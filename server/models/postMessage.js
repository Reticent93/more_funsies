// import db from '../data/config.js'
//
// async function add(user) {
//     const [id] = await db('users').insert(user)
//     return findById(id)
// }
//
// const find = () => {
//     return db('users').select('*', 'name')
// }
//
// const findBy = (filter) => {
//     return db('users').select('id', 'name', 'posts').where(filter)
// }
//
// const findById = (id) => {
//     return db('posts as p').join('users as u', 'u.id', 'p.user_id').where('p.user_id', id).select('p.id', 'p.contents', 'u.name')
// }
//
// export default {add, find, findBy, findById}