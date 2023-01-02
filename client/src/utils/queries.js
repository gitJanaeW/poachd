import {gql} from "@apollo/client";

// SHOULD WORK WITH HEADER AUTH
export const QUERY_ME = gql`
    query queryMe {
        me {
            _id
            username
            email
            description
            style
            subscribed
            recipes {
              name
              likes
              tags
            }
          }
    }
`;

// NOT WORKING
export const QUERY_USER = gql`
    query getUser($username: String!) {
        user(username: $username) {
            _id
            username
            email
            description
            style
            subscribed
            recipes {
                name
                likes
                tags
            }
        }
    }
`;

// SHOULD WORK
// export const GET_RECIPES = gql`
//     recipes {
//         _id
//         name
//         likes
//         tags
//         prepTime
//         servings
//         ingredients
//         directions
//         poachd
//     }
// `;