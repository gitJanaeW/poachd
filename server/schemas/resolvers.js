const {AuthenticationError} = require('apollo-server-express');
const {User, Recipe, Comment} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        // user: async (parent, args, context) => {
        //     if (context. user) {
        //         const user = await User.findById(context.user._id);
        //         return user;
        //     }
        // },
        users: async () => {
            const users = await User.find();
            return users;
        },
        recipes: async () => {
            const recipes = await Recipe.find();
            return recipes;
        },
        comments: async () => {
            const comments = await Comment.find();
            return comments;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        // addRecipe: async (parent, args) => {
        //     const recipe = await Recipe.create(args);
        //     return {recipe};
        // }
    }
};

module.exports = resolvers;