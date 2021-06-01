import express from "express";
import postModel from './posts_model.js'


const router = express.Router({
    mergeParams:true,
})




router.get('/', async (req, res, next) => {
    try {
        const {id} = req.params
        const posts = await postModel.findByUserId(id)
        res.json(posts)
    }catch (e) {
        next(e)
    }
})



export default router;