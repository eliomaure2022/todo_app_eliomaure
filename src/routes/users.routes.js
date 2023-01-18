const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserWithTasks,
  getUsersWithCategories,
} = require("../controlers/users.controller");

const router = Router();

//localhost:8000/users
//controlador
router.get("/users", getAllUsers);

router.get("/users/:id", getUserById);

//obtener un usuario con sus tareas
router.get("/users/:id/tasks", getUserWithTasks);

router.get("/users/:id/categories", getUsersWithCategories);

router.post("/users", createUser);

router.put("/users/:id", updateUser);

router.delete("/users/:id", deleteUser);

module.exports = router;
