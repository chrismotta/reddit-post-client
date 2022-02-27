import * as actionTypes from "./actionTypes";

export function loadPosts() {
  const action: PostAction = {
    type: actionTypes.LOAD_POSTS,
    payload: {},
  };
  return action;
}

export function loadPostSuccess(postList: PostList) {
  const action: PostAction = {
    type: actionTypes.LOAD_POSTS_SUCCESS,
    payload: {
      postList,
    },
  };
  return action;
}

export function openPost(postId: string) {
  const action: PostAction = {
    type: actionTypes.OPEN_POST,
    payload: {
      postId,
    },
  };
  return action;
}

export function dismissPost(postId: string) {
  const action: PostAction = {
    type: actionTypes.DISMISS_POST,
    payload: {
      postId,
    },
  };
  return action;
}

export function dismissAllPosts() {
  const action: PostAction = {
    type: actionTypes.DISMISS_ALL_POSTS,
    payload: {},
  };
  return action;
}
