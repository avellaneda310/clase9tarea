const knex = require("knex")({
    client: "mysql", 
    connection: {
        host: "localhost", 
        user: "root", 
        password: "",
        database: "clase9tarea", 
        pool: {min: 1, max: 20}
    }
});

module.exports = knex;