import { gql } from "@apollo/client";


export const CREATE_USER = gql `
  mutation createUser($name: String!, $email: String!, $phone: String!) {
    createUser(name: $name, email: $email, phone: $phone) {
      id,
      name,
      email,
      phone
    }
  }
`

export const UPDATE_USER = gql `
  mutation updateUser($id: ID!, $name: String, $email: String, $phone: String) {
    updateUser(id: $id, name: $name, email: $email, phone: $phone) {
      id
      name
      email
      phone
      projects {
        id
        name
        status
      }
    }
  }
`

export const DELETE_USER = gql `
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      id
    }
  }
`

export const DELETE_ALL_USERS = gql `
  mutation deleteAllUsers {
    deleteAllUsers
  }
`