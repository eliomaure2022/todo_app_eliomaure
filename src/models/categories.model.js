const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Categories = db.define(
  "categories",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    todoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "todo_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Categories;
