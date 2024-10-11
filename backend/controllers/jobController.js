// controllers/jobController.js
import JobOffer from "../models/job.js";

export const createJobOffers = async (req, res) => {
    try {
        const jobOffers = req.body;
        const insertedJobs = await JobOffer.insertMany(jobOffers);
        res.status(201).json(insertedJobs);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout des offres", error });
    }
};

export const getAllJobOffers = async (req, res) => {
    try {
        const jobs = await JobOffer.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération des offres", error });
    }
};