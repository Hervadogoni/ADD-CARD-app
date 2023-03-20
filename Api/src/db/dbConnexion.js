const {Client} = require('pg')

module.exports = new Client({
    database : "crudapi",
    user: "postgres",
    password : "pgadmin",
    host : "localhost",
    port : 5432
})