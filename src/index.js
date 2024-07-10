const express = require('express')
require('./config/dbconfig');
const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})