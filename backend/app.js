import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';


dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch((error) => console.log("Connexion à MongoDB échouée....", error));  // Affiche l'erreur détaillée


export default app;