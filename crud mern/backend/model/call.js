import mongoose from "mongoose";

const callSchema = mongoose.Schema({
    reference: {
        type: [String, Number],
        required: true,
    },
    campaign: {
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
    },

    duration:{
        type: Number,
    },
    calltime: {
        type: Date, required: true, default: Date.now
    },
    callby: {
        type: String,
        required: true,
    }
}, { Timestamp: true });

const call = mongoose.model('Call Log', callSchema);
export default call;