import express from "express";
import path from "path";
import dotenv from "dotenv";

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

const __dirname = path.resolve();
// Configuration pour servir le fichier statique index.html depuis dist/job_board
app.use(express.static(path.join(__dirname, "..", "dist", "job_board")));

app.get("*", (req, res) => {
  // Renvoi du fichier index.html à chaque route
  res.sendFile(path.join(__dirname, "..", "dist", "job_board", "index.html"));
});

app.get("/api/users", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
