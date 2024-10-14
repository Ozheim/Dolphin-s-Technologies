import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import Headhunter from '../models/headhunter.js';

export const createHunter = async (req, res) => {
    try {
        const { companyName, email, password } = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newHeadhunter = new Headhunter({
            companyName,
            email,
            password: hashedPassword,
        });

        await newHeadhunter.save();
        res.status(201).json({
            message: "Utilisateur créé avec succès",
            headhunter : newHeadhunter
        });
    } catch (error) {
        console.error("Erreur lors de la création de l'utilisateur:", error);
        res.status(500).json({ error: "Erreur lors de la création de l'utilisateur", details: error.message });
    }
};


export const loginHunter = async (req, res) => {
    const { email, password } = req.body;

    try {
        const headhunter = await Headhunter.findOne({ email });
        if (!headhunter) {
            return res.status(400).json({ message: 'Utilisateur non trouvé' });
        }

        const isMatch = await bcrypt.compare(password, headhunter.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }
        const huntertoken = jwt.sign({ id: headhunter._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ huntertoken, headhunter: { id: headhunter._id, name: headhunter.companyName, email: headhunter.email } });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }
};
