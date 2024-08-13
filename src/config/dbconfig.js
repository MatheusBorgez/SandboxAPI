const mongoose = require('mongoose');
const dbconfig = 'mongodb+srv://matheusab594:GqZLVK0dG4St89Dm@sandboxapi.pn8fkns.mongodb.net/?retryWrites=true&w=majority&appName=SandboxAPI';

const connection = mongoose.connect(dbconfig);

mongoose.connection.dropDatabase();

module.exports = connection;