// import db from '../data/config.js'
//
// async function add(user) {
//
//     const [id] = await db('users').insert(user)
//     return findById(id)
// }
//
// function find() {
//     return db('users')
// }
//
// function findById(id) {
//     return db('users').where({id}).first()
// }
//
// function update(id, changes) {
//    return db('users').where(id).update(changes);
// }
//
// function remove(id) {
//     return db('users').where({id}).del()
// }
//
//
// export default {add, find, findById, update, remove}