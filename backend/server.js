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
app.use(
  express.static(path.join(__dirname, "..", "/dist/job_board  /index.html"))
);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.get("/api/users", (req, res) => {
  res.json({ message: "Liste des utilisateurs" });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
