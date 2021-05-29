import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'

import postRoutes from './routes/posts.js'

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(cors());

const port = process.env.PORT || 5000;

app.use('/posts', postRoutes)


app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})