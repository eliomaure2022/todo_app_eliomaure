const { Router } = require("express");
const {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getTodosWithCategories,
} = require("../controlers/todos.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

//localhost:8000/todos

router.get("/todos", authMiddleware, getAllTasks);

router.get("/todos/:id", authMiddleware, getTaskById);

router.get("/todos/:id/category", authMiddleware, getTodosWithCategories);

router.post("/todos", authMiddleware, createTask);

router.put("/todos/:id", authMiddleware, updateTask);

router.delete("/todos/:id", authMiddleware, deleteTask);

module.exports = router;
