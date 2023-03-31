// src/index.js
import app from "./app.js";
import connectDB from "./db.js";

// Conectarse a la base de datos de MongoDB
connectDB();

// Iniciar el servidor
app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});
