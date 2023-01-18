const UserServices = require("../services/users.services");

const getAllUsers = async (req, res) => {
  try {
    const result = await UserServices.getAll();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getUserWithTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithTasks(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const getUsersWithCategories = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.getWithCategories(id);
    res.json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await UserServices.create(newUser);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const field = req.body;
    const result = await UserServices.update(id, field);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await UserServices.delete(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json(error.messaje);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserWithTasks,
  getUsersWithCategories,
  createUser,
  updateUser,
  deleteUser,
};
