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

export const GET_POST_BY_USER = gql`
query{
  postByUser{
    _id
    title
    content
    author
    tags
    createdAt
  }
}
`

export const GET_ALL_POST = gql`
query getAllPost{
  posts{
    _id
    content
    title
    tags
    createdAt
    comments{
      _id
      content
      author
    }
  }
}
`