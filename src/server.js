import app from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js"; // Importa la función de conexión

dotenv.config();

const PORT = process.env.PORT || 4000;

const startServer = async () => {
  try {
    await connectDB(); // Conecta a la base de datos y sincroniza modelos
    app.listen(PORT, () => {
      console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error);
    process.exit(1);
  }
};

startServer();
