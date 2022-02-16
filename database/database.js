const Sequelize = require('sequelize');
//db perguntas
const connection = new Sequelize('perguntas', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;