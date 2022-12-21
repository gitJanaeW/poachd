const {AuthenticationError} = require('apollo-server-express');
const {User, Recipe} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context. user) {
                const user = await User.findById(context.user._id);
                return user;
            }
        },
        recipe: async (parent, args) => {
            const recipe = await Recipe.findById(args._id);
            return recipe;
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return {token, user};
        },
        addRecipe: async (parent, args) => {
            const recipe = await Recipe.create(args);
            return {recipe};
        }
    }
}