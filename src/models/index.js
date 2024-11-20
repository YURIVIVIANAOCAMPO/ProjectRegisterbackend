import { Sequelize } from "sequelize";
import personModel from "./person.js";
import fileModel from "./file.js";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  port: process.env.DB_PORT,
});

const models = {
  Person: personModel(sequelize),
  File: fileModel(sequelize),
};

// Relación entre modelos
models.Person.hasMany(models.File, { foreignKey: "personId", as: "files" });
models.File.belongsTo(models.Person, { foreignKey: "personId", as: "person" });

export { sequelize };
export default models;
