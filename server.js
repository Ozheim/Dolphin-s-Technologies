import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import express from "express";
import path from "path";

dotenv.config();

const port = process.env.PORT || 8080;

// Connexion à la base de données
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données :", err);
  });

// Configuration pour le frontend (si nécessaire)
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
