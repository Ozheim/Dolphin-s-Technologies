import User from "../models/User.js";

export const userDashboard = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    res.json({
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      createdAt: user.createAt,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};
