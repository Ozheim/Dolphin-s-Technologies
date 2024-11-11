import express from "express";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const app = express();

// Normalisation du port
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

// Récupère le chemin du répertoire courant (backend)
const __dirname = path.resolve();

// Serve les fichiers statiques depuis le dossier 'build' à la racine du projet
app.use(express.static(path.join(__dirname, "..build")));

// Route pour toutes les autres requêtes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
console.log(
  "Fichiers dans le dossier build:",
  fs.readdirSync(path.join(__dirname, "..", "build"))
);

// Exemple d'API
app.get("/api/users", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
