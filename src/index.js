const express = require('express')
require('./config/dbconfig');
const routes = require('./routes')
const cors = require('cors');

const app = express()

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json())

app.use(routes)

app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})