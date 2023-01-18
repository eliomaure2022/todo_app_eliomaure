const Tasks = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos-categories.model");

class TodosServices {
  static async getAll() {
    try {
      const result = await Tasks.findAll();
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const result = await Tasks.findByPk(id);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getWithCategories(id) {
    try {
      const result = await Tasks.findOne({
        where: { id },

        include: {
          model: TodosCategories,
          as: "category",
          include: {
            model: Categories,
            as: "category",
          },
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async create(task) {
    try {
      const result = await Tasks.create(task);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async update(id, field) {
    try {
      const result = await Tasks.update(field, {
        where: { id },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await Tasks.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TodosServices;
