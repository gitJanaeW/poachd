const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type Recipe {
        _id: ID
        name: String
        likes: Int
        tags: [String]
        prepTime: String
        servings: Int
        ingredients: [String]
        directions: [String]
        createdAt: Int
        poachd: Boolean
    }
    type User {
        _id: ID
        username: String
        email: String
        description: String
        style: [String]
        subscribed: Boolean
        recipes: [Recipe]
        collectionList: [Recipe]
    }
    type Comment {
        _id: ID
        body: String
        createdAt: Int
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        recipes: [Recipe]
        recipe(_id: ID!): Recipe
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        updateUser(_id: ID!, description: String!, style: [String!]): User
    }
`;

module.exports = typeDefs;