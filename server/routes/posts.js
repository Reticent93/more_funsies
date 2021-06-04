import express from "express";
import Posts from '../models/posts_model.js'



const router = express.Router({
    mergeParams:true,
})

// router.use("/:id/comments", commentRouter);

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
        const posts = await Posts.findById(req.params.id)
        if(!posts) {
            return  res.status(404).json(postIdError)
        }

        res.status(200).json(posts)
    }catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        if(!req.body.title || !req.body.contents) {
           return  res.status(404).json(postIdError)
        }
        res.status(201).json(await Posts.add(req.body))
    }catch (e) {
        next(e)
    }
})

router.put('/:id', async (req, res, next) => {
        const {id} = req.params
        const {title, contents} = req.body
        if(!title || !contents) {
             res.status(404).json({message: `please provide updated content for post ${id}`})
    }
    try {
        const postId = await Posts.findById(req.params.id)
        if(!postId) {
            return res.status(404).json(postIdError)
        }
        const newPost = await Posts.update(req.params.id, {
            username: req.body.username,
            title: req.body.title,
            contents: req.body.contents
        } )
        res.status(200).json(newPost)

    }catch (e) {
        next(e)
    }

router.delete('/:id', async (req, res, next) => {
    try {
        const postDelete = await Posts.findById(req.params.id)
        if(!postDelete) {
            res.status(404).json(postIdError)
        }
        await Posts.remove(req.params.id)
        res.status(200).json(postDelete)
    } catch (e) {
        next(e)
    }


})




})



export default router;