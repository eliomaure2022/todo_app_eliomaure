const { Sequelize } = require("sequelize");

// crear una instancia con parametros de configuracion  de nuestr a base de datos
// un objeto de conf -->credenciales de mi base de datos
const db = new Sequelize({
  database: "todoapp",
  username: "postgres",
  host: "localhost", //127.0.0.1
  port: "5432",
  password: "ruutt",
  dialect: "postgres", //la base de datos que estamos usando
});

module.exports = db;
