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
        token: ID
        user: User
    }
    type Query {
        users: [User]
        recipes: [Recipe]
        comments: [Comment]
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;