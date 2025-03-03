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

app.use(
  cors({
    origin: "https://app-59a0866c-f942-465a-a8b0-39a7f75184c6.cleverapps.io",
  })
);

app.use(express.json());

app.use("/api", userRoutes);
app.use("/api", jobRoutes);
app.use("/api", headhunterRoutes);
app.use("/api", postFormRoutes);
app.use("/api", dashBoardRoutes);

export default app;
