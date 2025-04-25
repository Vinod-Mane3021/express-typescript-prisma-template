import app from './app';
import express from 'express';
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL

app.listen(PORT, () => {
    console.log(`⚙️  Server is running at PORT: ${PORT} | DATABASE_URL: ${DATABASE_URL}`)
})
