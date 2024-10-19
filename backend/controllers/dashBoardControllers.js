import User from "../models/User.js";

export const userDashboard = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    res.json({
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};

export const hunterDashboard = async (req, res) => {
  try {
    const hunterId = req.params.id;

    const hunter = await User.findById(hunterId).select("-password");

    if (!hunter) {
      return res.status(404).json({ message: "Hunter non trouvé." });
    }

    res.json({
      id: hunter._id,
      name: hunter.companyName,
    });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur.", error: error.message });
  }
};
