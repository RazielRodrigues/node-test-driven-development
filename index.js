require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

//TODO: MOVER
const ninjas = require('./src/routes/ninjas.js')
app.use('/', ninjas);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})