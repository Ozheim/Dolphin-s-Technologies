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

// Utilisation du chemin absolu pour trouver le dossier build à la racine
const __dirname = path.resolve(); // Le répertoire où se trouve le fichier server.js
const buildPath = path.join(__dirname, "build"); // Le dossier build est maintenant au même niveau que server.js

// Serve les fichiers statiques depuis le dossier 'build'
app.use(express.static(buildPath));

// Route pour toutes les autres requêtes
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

// Exemple d'API
app.get("/api/users", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
