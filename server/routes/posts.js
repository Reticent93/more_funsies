import express from "express";
import Posts from '../models/posts_model.js'


const router = express.Router({
    mergeParams:true,
})

const postIdError = {message: "The post with the specified ID does not exist"}


router.get('/', async (req, res, next) => {
    try {
        res.json(await Posts.find())
    }catch (e) {
        next(e)
    }
})

router.get('/:id', async (req, res,next) => {
    try {
        const postId = await Posts.findById(req.params.id)
        if(!postId) {
            res.status(404).json(postIdError)

        }
        const {id} = req.params
        res.json(await Posts.findById(id))
    }catch (e) {
        next(e)
    }
})



export default router;