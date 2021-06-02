import express from "express";


import postRouter from '../routes/posts.js'
import Users from './users_model.js'


const router = express.Router({
    mergeParams: true,
})

router.use('/:id/posts', postRouter)

const userIdError = {message: "The user with the specified ID does not exist"}


router.get('/',async (req, res, next) => {
    try {

        res.json(await Users.find())
    }catch (e) {
        next(e)
    }
})

router.get('/:id',  async (req, res, next) => {
    try {
        const userId = await Users.findById(req.params.id)
        if(!userId) {
            return res.status(404).json(userIdError)
        }

        const {id} = req.params
        res.json(await Users.findById(id))
    }catch (e) {
        next(e)
    }
})

router.post('/', async (req, res, next) =>{
    try {

        res.status(201).json(await Users.add(req.body))

    }catch (e) {
        next(e)
    }
})

router.put('/:id', async (req, res, next) => {

        try {
            const userId = await Users.findById(req.params.id)
            if(!userId) {
                return res.status(404).json(userIdError)
            }

            const {id} = await Users.update(req.params, req.body)
            res.status(200).json(id)

        } catch (e) {
            next(e)
        }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const userId = await Users.findById(req.params.id)
        if(!userId) {
            return res.status(404).json(userIdError)
        }
        await Users.remove(req.params.id)

        res.status(204).json({success: true})
    }catch (e) {
        next()
    }

})

// const validateUserId = () => {
//     return async (req, res, next) => {
//         try {
//             const {id} = req.params
//             const user = await db('users').where({id}).first()
//
//             if(!user) {
//                 return res.status(401).json({
//                     message: 'User not found'
//                 })
//             }
//             req.user = user
//             next()
//         } catch (e) {
//             next(e)
//         }
//     }
// }


export default router;