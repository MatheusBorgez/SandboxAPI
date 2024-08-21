const express = require('express')
require('./config/dbconfig');
const routes = require('./routes')
const cors = require('cors');
const swaggerUi = require('swagger-ui-express')

const app = express()
app.get('/favicon.ico', (req, res) => res.status(204).end());

const swaggerFile = require('../swagger-output.json')
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(cors({
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json())

app.use(routes)


app.listen(3001, () => {
  console.log(`Example app listening on port ${3001}`)
})