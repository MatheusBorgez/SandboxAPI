const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'SandboxAPI',
    description: 'Documentação dos endpoints da SandboxAPI'
  },
  host: 'localhost:3001'
};

const outputFile = './swagger-output.json';
const routes = ['./src/routes.js'];

swaggerAutogen(outputFile, routes, doc);