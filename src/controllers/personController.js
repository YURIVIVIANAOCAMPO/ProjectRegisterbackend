import models from "../models/index.js";
import path from "path";

const personController = {
  async createPerson(req, res) {
    try {
      const { fullName, documentId, birthDate, address, phone, email, gender } = req.body;
      const file = req.file;

      // Guardar persona
      const newPerson = await models.Person.create({
        fullName,
        documentId,
        birthDate,
        address,
        phone,
        email,
        gender,
      });

      // Si se carga un archivo, guardar su información
      if (file) {
        await models.File.create({
          fileName: file.originalname,
          fileType: file.mimetype,
          filePath: path.join(process.env.UPLOAD_DIR, file.filename),
          personId: newPerson.id,
        });
      }

      return res.status(201).json({ message: "Registro exitoso", person: newPerson });
    } catch (error) {
      console.error("Error en la creación de la persona:", error);
      return res.status(500).json({ message: "Error en el registro de la persona" });
    }
  },
};

export default personController;
