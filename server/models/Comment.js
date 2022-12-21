const {Schema, model} = require("mongoose");

const CommentSchema = new Schema({
    body: {
        type: String,
        required: true,
        max: 280,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    // username
});

const Comment = model("Comment", CommentSchema);
module.exports = Comment;