import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'

import postRoutes from './routes/posts.js'
import userRoutes from './users/users.js'

// const express = require('express')
// const bodyParser = require('body-parser')
// const cors = require('cors')
//
// const postRoutes = require('./routes/posts')

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const port = process.env.PORT || 5000;

app.use('/posts', postRoutes)
app.use("/users", userRoutes)


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})