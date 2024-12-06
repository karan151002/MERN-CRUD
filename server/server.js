const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const app = express()
const connectDB = require('./config/db')
const routes = require('./routes/userRoute')
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(PORT, () => {
    console.log('Sever started')
})