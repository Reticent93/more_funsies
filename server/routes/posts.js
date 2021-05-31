import express from "express";


const router = express.Router()

router.get('/', getPosts);

module.exports = router