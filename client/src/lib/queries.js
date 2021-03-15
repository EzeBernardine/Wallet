import { gql } from "@apollo/client";

export const ADD_TODO = gql`
  mutation onAddTodo($title: String!, $description: String!) {
    addTodo(title: $title, description: $description) {
      _id
      title
      description
    }
  }
`;

export const GET_TODOS = gql`
  query {
    getTodos {
      _id
      title
      description
      completed
    }
  }
`;

export const DELETE_TODO = gql`
  mutation onDeleteTodo($id: ID!) {
    deleteTodo(id: $id)
  }
`;

// export const GET_TODO = gql`
//   query($id: ID) {
//     getTodo(id: $id) {
//       _id
//       title
//       description
//       completed
//     }
//   }
// `;

export const COMPLETE_TODO = gql`
  mutation($id: ID!) {
    changeTodoStatus(id: $id)
  }
`;
