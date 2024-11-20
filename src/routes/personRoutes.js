import express from "express";
import personController from "../controllers/personController.js";
import upload from "../middlewares/upload.js";
import { validatePersonData } from "../middlewares/validations.js";

const router = express.Router();

// Ruta para registrar una persona con archivo
router.post("/", upload.single("file"), validatePersonData, personController.createPerson);

export default router;
