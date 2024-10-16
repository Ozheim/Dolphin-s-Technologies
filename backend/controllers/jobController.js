// controllers/jobController.js
import JobOffer from "../models/job.js";

export const createJobOffers = async (req, res) => {
    try {
        const jobOffer = new JobOffer(req.body);
        const insertedJob = await jobOffer.save();
        res.status(201).json(insertedJob);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de l'offre", error });
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