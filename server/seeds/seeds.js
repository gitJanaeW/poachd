const db = require("../config/connection");
const {Recipe, User} = require("../models");
const {faker} = require("@faker-js/faker");

db.once("open", async () => {
    await Recipe.deleteMany({});
    await User.deleteMany({});

    // create users
    const userData = [];
    for (let i = 0; i < 25; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email();
        const password = "password12345";
        const description = faker.lorem.sentences(2);
        const style =  faker.word.adjective() + ", " + faker.word.adjective() + ", " + faker.word.adjective();
        userData.push({username, email, password, description, style});
    }
    const createdUsers = await User.collection.insertMany(userData);

    // // create recipes
    let createdRecipes = [];
    for (let i = 0; i < 40; i += 1) {
        const name = faker.name.jobTitle();
        const likes = faker.datatype.number({ max: 100 });
        const tags = faker.word.adjective() // make this an array
        const prepTime = faker.datatype.number({max: 100});
        const servings = faker.datatype.number({max: 15});
        const ingredientOne = "1 pinch of " + faker.word.noun();
        const ingredientTwo = "1 tablespoon of " + faker.word.noun();
        const ingredientThree = "2 large " + faker.word.noun() + "s";
        const ingredients = [ingredientOne, ingredientTwo, ingredientThree];
        const directions = faker.lorem.sentences();
        
        const randomUserIndex = Math.floor(Math.random() * 25);
        const {username, _id: userId} = createdUsers.insertedIds[randomUserIndex].toString();
        const createdRecipe = await Recipe.create({
            name, username, likes, tags, prepTime, servings, ingredients, directions
        });
        const updatedUser = await User.updateOne(
            {_id: userId},
            {$push: {recipes: createdRecipe._id}}
        );
        createdRecipes.push(createdRecipe);
    }

    console.log('all done!');
    process.exit(0);
});

