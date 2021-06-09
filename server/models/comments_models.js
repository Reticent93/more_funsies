import db from '../data/config.js'

function findPostComments(postId) {
    return db('comments')
        .join('posts', 'posts.id', 'post_id')
        .select('comments.*', "title as post")
        .where("post_id", postId)
}

function findCommentById(id) {
    return db('comments')
        .join('posts', 'posts.id', 'post_id')
        .select('comments.*', 'title as post')
        .where('post_id', id)
}


function insertComment(comment) {
    return db('comments')
        .insert(comment)
        .then(ids => ({id: ids[0]}))
}



export default {findPostComments, findCommentById, insertComment};