import {gql} from '@apollo/client';

export const SIGN_UP = gql`
    mutation addUser ($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                description
                style
                subscribed
                recipes {
                _id
                }
                collectionList {
                _id
                }
            }
        }
    }
`;

export const UPDATE_USER = gql`
    mutation updateUser($_id: ID!, $description: String, $style: [String]) {
        updateUser(_id: $_id, description: $description, style: $style) {
            username
            description
            style
        }
    }
`;