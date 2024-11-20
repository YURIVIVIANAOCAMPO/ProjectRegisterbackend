import express from "express";
import personRoutes from "./personRoutes.js";

const router = express.Router();

// Rutas para gestionar personas
router.use("/person", personRoutes);

export default router;
