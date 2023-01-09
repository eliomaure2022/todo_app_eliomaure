//  importar express
const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const Users = require("./models/users.model");
const Todos = require("./models/todos.model");

const app = express();

app.use(express.json());

const PORT = 8000;

//localhost:8000/
//probando la conexion a la base de datos
db.authenticate()
  .then(() => console.log("autenticacion exitosa"))
  .catch((error) => console.log(error));

initModels();
//vamos a usar el metodo sync de nuestro db
db.sync({ force: false })
  .then(() => console.log("base de datos sincronizada"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  res.status(200).json({ message: "Bienvenido al servidor" });
});
// definir rutas de nuestros enpointe(ep)
//  todas las consulta de usuarios debetiamos visditar
// localhost:8000/users
// localhost:8000/todos

//GET a /users
app.get("/users", async (req, res) => {
  try {
    //vamos a obtener el resultado de consultar a todos los users
    const result = await Users.findAll(); //select *from users
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//obtener usuario a traves de su id
app.get("/users/:id", async (req, res) => {
  try {
    //console.log(req.params);
    const { id } = req.params;
    const result = await Users.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// obtener un usuario por username
app.get("/users/username/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const result = await Users.findOne({ where: { username } });
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//creando un usuario
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const result = await Users.create(user);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

//actualizar un usuario solo podemos cbiar el password
app.put("/users/:id", async (req, res) => {
  try {
    const { id } = req.params; // { id: 2 }
    const field = req.body;
    const result = Users.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//borrar un usuario
app.delete("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Users.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//GET a /todos

app.get("/todos", async (req, res) => {
  try {
    const result = await Todos.findAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

//GET task por id

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.findByPk(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

// crear task (POST)

app.post("/todos", async (req, res) => {
  try {
    const task = req.body;
    const result = await Todos.create(task);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error);
  }
});

// Actualizar task (PUT)
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = Todos.update(field, {
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

// Eliminar una task (DELETE)

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todos.destroy({
      where: { id },
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`servidor corriendo en el puerto ${PORT}`);
});

//terminar los modelos
//crear relaciones entre modelos
// insertar informacion desde este proyecto

//hacer los endpoints y consultas

//vamos a insertar info en nuestra base de daros
// desde nuestro pryecto de node

//consultar la info con endpoints
