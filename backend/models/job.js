import mongoose from "mongoose";

const jobOfferSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        required: true,
        trim: true,
    },
    location: {
        type: String,
        required: true,
        trim: true,
    },
    salary: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    requirements: {
        type: [String],
        required: true,
    },
    jobType: {
        type: String,
        enum: ["Full-time", "Part-time", "Contract", "Internship"],
        default: "Full-time",
    },
    applyLink: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const JobOffer = mongoose.model("JobOffer", jobOfferSchema);
export default JobOffer;
