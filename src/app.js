import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Para parsear datos en formato JSON

// Rutas
app.use("/api", routes);

export default app;
