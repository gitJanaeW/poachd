const {AuthenticationError} = require('apollo-server-express');
const {User, Recipe, Comment} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        user: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findById(context.user._id);
                return user;
            }
        },
        users: async () => {
            const users = await User.find();
            return users;
        },
        recipes: async () => {
            const recipes = await Recipe.find();
            return recipes;
        },
    },
    Mutation: {
        login: async (parent, {email, password}) => {
            // checking if user exists
            const user = await User.findOne({email});
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // checking if password of user is correct
            const correctPw = await user.isCorrectPassword(password);
            console.log(correctPw);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // const token = signToken(user);
            // return {token, user};
            return user;
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            return user;
            // const token = signToken(user);
            // return {token, user};
        },
        // addRecipe: async (parent, args) => {
        //     const recipe = await Recipe.create(args);
        //     return {recipe};
        // }
    }
};

module.exports = resolvers;