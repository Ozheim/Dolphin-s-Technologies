import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import Headhunter from "../models/headhunter.js";

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
            headhunter: newHeadhunter
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
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

        const isMatch = await bcrypt.compare(password, headhunter.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Mot de passe incorrect' });
        }
        console.log("JE SUIS UN " + headhunter.role)

        const huntertoken = jwt.sign(
            { id: headhunter._id, role: 'headhunter' },
            process.env.JWT_SECRET,
            { expiresIn: '2h' }
        );
        res.json({ huntertoken, headhunter: { id: headhunter._id, companyName: headhunter.companyName, email: headhunter.email } });
        console.log(headhunter.companyName);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la connexion', error });
    }

};

export const getAllHunters = async (req, res) => {
  try {
    const headhunters = await Headhunter.find();
    console.log("Hunters trouvés:", headhunters);

    if (headhunters.length === 0) {
      return res.status(404).json({ message: "Aucun hunter trouvé" });
    }

    res.status(200).json(headhunters);
  } catch (error) {
    console.error("Erreur lors de la récupération des hunters:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des hunters", error });
  }
};

export const deleteHunter = async (req, res) => {
  try {
    const { id } = req.params;
    const headhunter = await Headhunter.findByIdAndDelete(id);

    if (!headhunter) {
      return res.status(404).json({ message: "Headhunter non trouvé." });
    }
    res.status(200).json({ message: "Headhunter supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la suppression de l'Headhunter",
        error,
      });
  }
};

