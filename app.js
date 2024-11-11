import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import headhunterRoutes from "./routes/headhunterRoutes.js";
import postFormRoutes from "./routes/postFormRoutes.js";
import dashBoardRoutes from "./routes/dashboardRoutes.js";

import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

import mongoose from "mongoose";
import dotenv from "dotenv";

const dbURI = process.env.MONGO_URI;

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connexion à la base de données réussie !");
  })
  .catch((err) => {
    console.error("Erreur de connexion à la base de données :", err);
  });

app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", jobRoutes);
app.use("/api", headhunterRoutes);
app.use("/api", postFormRoutes);
app.use("/api", dashBoardRoutes);

export default app;
