import mongoose from "mongoose";

const headhunterSchema = new mongoose.Schema({

    companyName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        rewquired: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }

});

const Headhunter = mongoose.model("Headhunter", headhunterSchema);
export default Headhunter;