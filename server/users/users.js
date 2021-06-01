import express from "express";
import db from '../data/config.js'

import postRouter from '../routes/posts.js'
import Users from './users_model.js'

const router = express.Router({
    mergeParams: true,
})

router.use('/:id/posts', postRouter)

router.get('/', async (req, res, next) => {
    try {

        res.json(await Users.find())
    }catch (e) {
        next(e)
    }
})

router.get('/:id',  async (req, res, next) => {
    try {
        const {id} = req.params
        res.json(await Users.findById(id))
    }catch (e) {
        next(e)
    }
})



const validateUserId = () => {
    return async (req, res, next) => {
        try {
            const {id} = req.params
            const user = await db('users').where({id}).first()

            if(!user) {
                return res.status(401).json({
                    message: 'User not found'
                })
            }
            req.user = user
            next()
        } catch (e) {
            next(e)
        }
    }
}


export default router;