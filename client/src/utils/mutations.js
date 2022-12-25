import {gql} from '@apollo/client';

export const ADD_USER = gql`
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
`