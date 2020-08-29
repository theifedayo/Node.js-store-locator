const path = require('path')
const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')



dotenv.config({path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
	console.log(`Server running in ${process.env.NODE_ENV} on port ${process.env.PORT}`)
})