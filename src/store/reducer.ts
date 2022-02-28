import * as actionTypes from "./actionTypes";

const initialState: PostState = {
  postList: [],
  isLoading: false,
  error: null,
};

const updateReadPosts = (list: PostList, postId: string): PostList => {
  return list.map((post: IPost) => {
    if (post.id !== postId) return post;
    return {
      ...post,
      opened: true,
    };
  });
};

const reducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    case actionTypes.LOAD_POSTS:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case actionTypes.LOAD_POSTS_SUCCESS:
      const newPostList: PostList = state.selectedPostId
        ? action.payload.postList
        : updateReadPosts(
            action.payload.postList,
            action.payload.postList[0].id
          );
      return {
        ...state,
        postList: [...state.postList, ...newPostList],
        selectedPostId: state.selectedPostId || action.payload.postList[0].id,
        lastPostId:
          action.payload.postList[action.payload.postList.length - 1].id,
        isLoading: false,
        error: null,
      };

    case actionTypes.OPEN_POST:
      return {
        ...state,
        selectedPostId: action.payload.postId,
        postList: updateReadPosts(state.postList, action.payload.postId),
      };

    case actionTypes.DISMISS_POST:
      return {
        ...state,
        postList: state.postList.filter(
          (post) => post.id !== action.payload.postId
        ),
      };

    case actionTypes.DISMISS_ALL_POSTS:
      return {
        ...state,
        postList: [],
      };

    default:
      return state;
  }
};

export default reducer;
