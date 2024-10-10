
import app from './app.js';
import dotenv from 'dotenv';
import { createServer } from 'http';  // Remplace require("http") par import

dotenv.config();  // N'oublie pas de configurer dotenv

// Fonction pour normaliser le port
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

const port = normalizePort(process.env.PORT || "5000");
app.set("port", port);

// Gestion des erreurs de démarrage du serveur
const errorHandler = (error) => {
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

// Création du serveur HTTP avec la fonction importée
const server = createServer(app);

server.on("error", errorHandler);
server.on("listening", () => {
    const address = server.address();
    const bind = typeof address === "string" ? "pipe " + address : "port " + port;
    console.log("Listening on " + bind);
});

app.get("users", (req, res) => {
    res.json({message : "Liste des utilisateurs"});
})

// Écoute du serveur sur le port spécifié
server.listen(port);
