import { sequelize } from "../models/index.js";

export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection successful.");
    await sequelize.sync({ alter: true });
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};
