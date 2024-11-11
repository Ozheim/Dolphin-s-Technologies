import JobOffer from "../models/job.js";
import PostForm from "../models/postForm.js";
import mongoose from "mongoose";
import { getUserId } from "../middleware/auth.js";


// A un controller qui prends en paramètre mon hunter
// Pour fill cette variable hunter, on va utiliser le token

export const createJobOffers = async (req, res) => {
  try {
    const jobOffer = new JobOffer(req.body);

    const hunterId = getUserId(req);
    jobOffer.hunterId = hunterId;

    const insertedJob = await jobOffer.save();
    res.status(201).json(insertedJob);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de l'ajout de l'offre", error });
  }
};

export const getAllJobOffers = async (req, res) => {
  try {
    const jobs = await JobOffer.find();
    res.status(200).json(jobs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des offres", error });
  }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    console.log("Job ID reçu :", jobId);

    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      console.log("ID de job invalide.");
      return res.status(400).json({ error: "ID de job invalide." });
    }

    const getOneJob = await JobOffer.findById(jobId);
    console.log("Résultat de la recherche :", getOneJob);

    if (!getOneJob) {
      console.log("Pas de job trouvé.");
      return res.status(404).json({ error: "Pas de job trouvé." });
    }

    res.status(200).json(getOneJob);
  } catch (error) {
    console.error("Erreur dans getJobById :", error);
    res.status(500).json({ error: "Erreur serveur." });
  }
};

export const postJobOnApplyPage = async (req, res) => {
  console.log(req.body);
  try {
    const postForm = new PostForm(req.body);
    const formSaved = await postForm.save();
    res.status(201).json(formSaved);
  } catch (error) {
    console.error("Error saving form:", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la sauvegarde du formulaire", error });
  }
};
