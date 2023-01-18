const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos-categories.model");

const users = [
  { username: "elio", email: "elio@gmail.com", password: "1234" },
  { username: "lucero", email: "lucero@gmail.com", password: "1234" },
  { username: "jhorman", email: "jhorman@gmail.com", password: "1234" },
  { username: "juan", email: "juan@gmail.com", password: "1234" },
];

const todos = [
  { title: "estudiar node", description: "descripcion de tarea 1", userId: 1 },
  { title: "pasear perro", userId: 2 },
  { title: "lavar platos", description: "descripcion de tarea 1", userId: 3 },
  { title: "ir al medico", description: "descripcion de tarea 1", userId: 4 },
];

const categories = [
  { name: "personal", userId: 1 },
  { name: "educacion", userId: 2 },
  { name: "salud", userId: 4 },
  { name: "trabajo", userId: 1 },
  { name: "hogar", userId: 1 },
  { name: "cocina", userId: 3 },
  { name: "deporte", userId: 1 },
  { name: "ocio", userId: 4 },
  { name: "financiero", userId: 1 },
  { name: "entretenimiento", userId: 2 },
];

const todosCategories = [
  { categoryId: 1, todoId: 1 },
  { categoryId: 2, todoId: 1 },
  { categoryId: 4, todoId: 1 },
  { categoryId: 1, todoId: 2 },
  { categoryId: 7, todoId: 2 },
  { categoryId: 10, todoId: 2 },
  { categoryId: 3, todoId: 2 },
  { categoryId: 5, todoId: 3 },
  { categoryId: 6, todoId: 3 },
  { categoryId: 1, todoId: 4 },
  { categoryId: 3, todoId: 4 },
];

//cada model tiene metodo: create, findOne,findAll,findByPk
//update, destroy

db.sync({ force: true })
  .then(() => {
    console.log("iniciando con el sembradio malicioso");
    users.forEach((user) => Users.create(user));

    setTimeout(() => {
      todos.forEach((todo) => Todos.create(todo));
    }, 100);

    setTimeout(() => {
      categories.forEach((category) => Categories.create(category));
    }, 250);

    setTimeout(() => {
      todosCategories.forEach((tc) => TodosCategories.create(tc));
    }, 400);
  })
  .catch((error) => console.log(error));
