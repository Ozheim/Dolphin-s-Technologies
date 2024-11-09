import express from "express";
import dotenv from "dotenv";
import { createServer } from "http";
import path from "path";

dotenv.config();

const app = express();

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || "8080");
app.set("port", port);

const errorHandler = (server, error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const address = server.address();
  const bind =
    typeof address === "string" ? "pipe " + address : "port: " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = createServer(app);

// Configurer le serveur pour servir les fichiers statiques du frontend
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// Route pour renvoyer `index.html` pour les routes non reconnues (utilisé pour le routing frontend)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

// Exemple de route API pour les utilisateurs
app.get("/api/users", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

server.on("error", (error) => errorHandler(server, error));
server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  console.log("Listening on " + bind);
});

server.listen(port);
