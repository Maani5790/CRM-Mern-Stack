import mongoose from "mongoose";

const noteSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        Ref: "User",
        required:true,
    }

    
}, {timestamps: true});

const note = mongoose.model('note', noteSchema);

export default note;