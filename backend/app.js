<<<<<<< HEAD
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log("Connexion à MongoDB échouée....", error));

app.use(express.json());
app.use('/api', userRoutes);
app.use("/api", jobRoutes);

=======

import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log("Connexion à MongoDB échouée....", error));

    app.use(express.json());
    app.use('/api', userRoutes);


>>>>>>> ad8685839590d2dc38de74985ed3492225b57584
export default app;