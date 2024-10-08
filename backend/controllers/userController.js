import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

// Méthode pour créer un utilisateur
export const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Hacher le mot de passe avant de sauvegarder
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({
            message: "Utilisateur créé avec succès",
            user: newUser
        });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur" });
    }
};

// Méthode pour gérer la connexion (login)
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Cherche l'utilisateur par email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        // Compare le mot de passe
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }

        // Créer un token JWT
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Retourner le token au client
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }
};
