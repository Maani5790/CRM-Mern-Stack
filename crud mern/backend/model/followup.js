import mongoose from "mongoose";

const followUpSchema = mongoose.Schema({
    reference: {
        type: [String, Number],
        required: true,
    },
    campaign: {
        type: String,
        required: true,
    },
    time: {
        type: Date, required: true, default: Date.now
    },
    follow: {
        type: String,
        required: true,
    }
}, { Timestamp: true });

const followup = mongoose.model('followup', followUpSchema);
export default followup;