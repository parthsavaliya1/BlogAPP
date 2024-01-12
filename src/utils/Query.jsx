import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signupUser(userNew: $userNew) {
      _id
      firstName
      lastName
      email
      profilePicture
    }
  }
`;

export const LOGIN_USER = gql`
mutation loginUser($userSignIn:UserSignInInput!){
  	signInUser(userSignIn:$userSignIn){
    token
    user{
      firstName
      lastName
      email
      profilePicture
    }
  }
}
`