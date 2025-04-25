import express from 'express'
import cors from 'cors'
import { REQUEST_DATA_LIMIT } from './constants/index'
import cookieParser from 'cookie-parser'

const app = express()

app.use(cors({
    origin: "*",
    credentials: true
}))

// set the limit for request data coming from client
app.use(express.json({ limit: REQUEST_DATA_LIMIT }))
app.use(express.urlencoded({ extended: true, limit: REQUEST_DATA_LIMIT }));
app.use(express.static('public'))
app.use(cookieParser())

import { router } from './routes/index';

app.use("/api/v1", router)


export default app