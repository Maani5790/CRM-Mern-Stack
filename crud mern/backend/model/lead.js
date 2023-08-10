import mongoose from "mongoose";

const leadSchema  = mongoose.Schema({
    reference:{
        type: [String, Number],
        required: true,
    },

    campaign:{
        type: String,
        required: true,
    },

    name:{
        type: String,
        required: true,
    },

    email:{
        type: String,
        required: true,
    }
},{ Timestamp: true });

const lead = mongoose.model('Lead', leadSchema);
export default lead;
