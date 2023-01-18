const TodosServices = require("../services/todos.services");

const getAllTasks = async (req, res) => {
  try {
    const result = await TodosServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getTodosWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.getWithCategories(id);
    res.json({
      messaje: "Enviando tareas con categorias",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      error: error.messajes,
      details: error.stack,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    const result = await TodosServices.create(newTask);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await TodosServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await TodosServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = {
  getAllTasks,
  getTaskById,
  getTodosWithCategories,
  createTask,
  updateTask,
  deleteTask,
};
