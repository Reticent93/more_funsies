import express from "express";
import Comments from '../models/comments_models.js'


const router = express.Router({mergeParams:true})

//_______________________________________________________________
// get - (http://localhost:5000/api/posts/:id/comments/)

router.get('/', async (req, res, next) => {
    const {id} = req.params
    Comments.findPostComments(id)
        .then(data => {
        res.json(data)
        }).catch(err => {
            res.status(500).json({
                error: "The post with the specified ID does not exist", err
            })
    })
})

//________________________________________________________________
//get - (http://localhost:5000/api/posts/:id/comments/:commentId)
router.get('/:commentId', (req, res, next) => {
    Comments.findCommentById(req.params.id, req.params.commentId)
        .then(data => {
            if(data) {
                res.json(data)
            } else {
                res.status(404).json({message: 'Comment not found'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'Could not retrieve comment', err})
        })
})


//________________________________________________________________________
//POST - (http://localhost:5000/api/posts/:id/comments/)
router.post('/', (req, res, next) => {
    const comment = req.body
    const {id} = req.params
    if(!comment.text) {
        res.status(400).json({errorMessage: "Please provide text for the comment"})
    } else {
        const newComment = {
            text: req.body.text,
            post_id: id
        }
        Comments.insertComment(newComment)
            .then(comment => {
                if(comment) {
                    res.status(201).json(newComment)
                } else {
                    res.status(404).json({errorMessage: "The post with the specified ID does not exist"})
                }
            })
            .catch(err => {
                res.status(500).json({errorMessage: "There was an error while saving the comments to the database", err})
            })
    }
})






export default router