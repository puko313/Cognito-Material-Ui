/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePost = `subscription OnCreatePost($username: String!) {
  onCreatePost(username: $username) {
    id
    name
    content
    username
    createdAt
    comments {
      items {
        id
        postId
        message
        username
      }
      nextToken
    }
  }
}
`;
export const onUpdatePost = `subscription OnUpdatePost($username: String!) {
  onUpdatePost(username: $username) {
    id
    name
    content
    username
    createdAt
    comments {
      items {
        id
        postId
        message
        username
      }
      nextToken
    }
  }
}
`;
export const onDeletePost = `subscription OnDeletePost($username: String!) {
  onDeletePost(username: $username) {
    id
    name
    content
    username
    createdAt
    comments {
      items {
        id
        postId
        message
        username
      }
      nextToken
    }
  }
}
`;
export const onCreateComment = `subscription OnCreateComment($username: String!) {
  onCreateComment(username: $username) {
    id
    postId
    message
    username
  }
}
`;
export const onUpdateComment = `subscription OnUpdateComment($username: String!) {
  onUpdateComment(username: $username) {
    id
    postId
    message
    username
  }
}
`;
export const onDeleteComment = `subscription OnDeleteComment($username: String!) {
  onDeleteComment(username: $username) {
    id
    postId
    message
    username
  }
}
`;
