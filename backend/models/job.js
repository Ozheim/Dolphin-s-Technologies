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
        type: mongoose.Schema.Types.Mixed, // Mixed type to allow either a number or an object
        validate: {
            validator: function (v) {
                if (typeof v === 'object') {
                    return v.min !== undefined && v.max !== undefined && v.max >= v.min;
                }
                return typeof v === 'number';
            },
            message: 'Le salaire doit être soit un nombre, soit un objet avec un intervalle valide.'
        },
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
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    applyLink: {
        type: String,
        required: true,
    },
});

const JobOffer = mongoose.model("JobOffer", jobOfferSchema);
export default JobOffer;