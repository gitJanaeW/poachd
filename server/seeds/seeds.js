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
        const style = [];
        const styleOne = faker.word.adjective();
        const styleTwo = faker.word.adjective();
        const styleThree = faker.word.adjective();
        style.push(styleOne);
        style.push(styleTwo);
        style.push(styleThree);
        userData.push({username, email, password, description, style});
    }
    const createdUsers = await User.collection.insertMany(userData);

    // // create recipes
    // let createdRecipes = [];
    // for (let i = 0; i < 40; i += 1) {
    //     const likes = faker.datatype.number({ max: 100 });
    //     const tags = faker.word.adjective() // make this an array
    //     const prepTime = faker.datatype.number({max: 100});
    //     const servings = faker.datatype.number({max: 15});
    //     const ingredients = faker.word.noun();
    //     const directions = faker.lorem.sentences({max: 3});
        
    //     const randomUserIndex = Math.floor(Math.random() * createdUsers.length);
    //     const {username, _id: userId} = createdUsers[randomUserIndex];
    //     createdRecipe = await Recipe.create({
    //         username, likes, tags, prepTime, servings, ingredients, directions
    //     });
    //     // this would push the recipe into a list of user's recipe by the recipe's userId
    //     // don't have that set up yet, so it's commented out
    //     // const updatedRecipe = await User.updateOne(
    //     //     {_id: userId},
    //     //     {$push: {recipe: createdRecipe._id}}
    //     // );
    //     createdRecipes.push(createdRecipe);
    // }

    console.log('all done!');
    process.exit(0);
});

