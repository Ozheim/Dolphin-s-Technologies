import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: role || "user",
    });

    await newUser.save();
    res.status(201).json({
      message: "Utilisateur créé avec succès",
      user: newUser,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'utilisateur:", error);
    res.status(500).json({
      error: "Erreur lors de la création de l'utilisateur",
      details: error.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  let tokenTime = "1h";
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    if (user.role === "admin") tokenTime = "24h";
    console.log("JE SUIS UN " + user.role);

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: tokenTime }
    );
    console.log("LE TOKEN TIME :", tokenTime);
    console.log(" :", tokenTime);

    res.json({ token, userId: user._id, role: user.role, name: user.name });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la connexion", error });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    console.log("Utilisateurs trouvés:", users);

    if (users.length === 0) {
      return res.status(404).json({ message: "Aucun utilisateur trouvé" });
    }

    res.status(200).json(users);
  } catch (error) {
    console.error("Erreur lors de la récupération des utilisateurs:", error);
    res.status(500).json({
      message: "Erreur lors de la récupération des utilisateurs",
      error,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    res.status(200).json({ message: "Utilisateur supprimé avec succès" });
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression de l'utilisateur",
      error,
    });
  }
};
