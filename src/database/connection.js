var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'DesafioNode'
     }
});
module.exports = knex
//create schema DesafioNode para colocar no database.sql na raiz do projeto

