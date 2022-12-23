const {Schema, model} = require("mongoose");
const GraphQLDate = require('graphql-date');

const RecipeSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
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
    createdAt: {
        type: GraphQLDate
    },
    poachd: {
        type: Boolean,
        default: false
    }
    // poaches causes the recipe object to break. Check syntax
    // poaches: {
    //     type: [this], // will refer to any child recipe listed
    //     pinned: {
    //         type: Boolean,
    //         default: false
    //     }
    // } 
});

const Recipe = model("Recipe", RecipeSchema);
module.exports = Recipe;