const mongoose = require("mongoose");
const {Schema} = mongoose;

const recipeSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    // img
    likes: {
        type: Number,
        default: 0
    },
    tags: [{
        type: String,
        require: true
    }],
    prepTime: {
        type: String,
        require: true,
    },
    servings: {
        type: Number,
        require: true
    },
    ingredients: [{
        type: String,
        require: true
    }],
    directions: [{
        type: String,
        require: true
    }],
    date: {
        type: Date,
        min: 0,
        default: Date.now
    },
    poaches: {
        type: [this], // will refer to any child recipe listed
        pinned: {
            type: Boolean,
            default: false
        }
    } 
});

const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;