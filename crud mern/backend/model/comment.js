import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
      },
        text: {
        type: String,
        trim: true,
        required: true
      },
       date: {
        type: Date,
        default: Date.now
      },
      comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment'
       }]
}, { Timestamp: true });

const comment = mongoose.model('Comments', commentSchema);

export default comment;

