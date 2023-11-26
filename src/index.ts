import express from 'express';

const app = express()


const PORT = process.env.PORT;
const MONGODB_URL = process.env.MONGODB_URL

app.listen(PORT, () => {
    console.log(`⚙️  Server is running at PORT: ${PORT} | MONGODB_URL: ${MONGODB_URL}`)
})

export default app;
