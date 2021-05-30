import express from "express";
import db from '../data/config'

const router = express.Router()

router.get('/', getPosts);

module.exports = router