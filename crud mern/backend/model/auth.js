import mongoose from "mongoose";

const authSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
}, {Timestamp: true});

const auth = mongoose.model('authentication', authSchema);
export default auth;