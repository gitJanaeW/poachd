const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        description: String
        style: [String]
    }
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
        user: User
        recipes: [Recipe]
        comments: [Comment]
    }
    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    }
`

module.exports = typeDefs;