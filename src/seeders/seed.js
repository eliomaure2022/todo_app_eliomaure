const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");

const users = [
  { username: "elio", email: "elio@gmail.com", password: "1234" },
  { username: "lucero", email: "lucero@gmail.com", password: "1234" },
  { username: "jhorman", email: "jhorman@gmail.com", password: "1234" },
];

const todos = [
  { title: "tarea 1", description: "descripcion de tarea 1", userId: 1 },
  { title: "tarea imposible", userId: 2 },
  { title: "tarea 2", description: "descripcion de tarea 1", userId: 2 },
  { title: "tarea 3", description: "descripcion de tarea 1", userId: 3 },
];

//const categories = [];

//const todosCategories = [];

//cada model tiene metodo: create, findOne,findAll,findByPk
//update, destroy

db.sync({ force: false })
  .then(() => {
    console.log("iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);
  })
  .catch((error) => console.log(error));
