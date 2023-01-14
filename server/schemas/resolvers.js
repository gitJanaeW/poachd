const {AuthenticationError} = require('apollo-server-express');
const {readFile} = require('fs');
const {User, Recipe, Comment, Image} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({_id: context.user._id})
                .select('-__v -password')
                .populate('recipes')
                .populate('style')
                .populate('collectionList');
                return userData;
            }
            throw new AuthenticationError('Not logged in');
        },
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
            const user = await User.findOne({email});
            console.log("hello");
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
            console.log(correctPw);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return {token, user};
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            let defaultPic;
            readFile("../../client/public/images/profile-photo.jpg", (err, data) => {
                if (err) throw err;
                defaultPic = new Image({
                    alt: "a cartoon, sunny-side egg on yellow background",
                    image: data
                });
                console.log("IMAGE RETURNED: ", data);
                defaultPic.save((err, image) => {
                    if (err) throw err;
                    console.log("Image saved successfully");
                })
            });
            // import profilePic as binary String for storage
            user.profilePic = defaultPic;
            return {token, user};
        },
        updateUser: async (parent, args) => {
            const user = await User.findByIdAndUpdate(
                args._id,
                {$set: {style: args.style, description: args.description}},
                {new: true}
            );
            
        }
        // addRecipe: async (parent, args) => {
        //     const recipe = await Recipe.create(args);
        //     return {recipe};
        // }
    }
};

module.exports = resolvers;