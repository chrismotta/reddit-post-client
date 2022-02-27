import * as actionTypes from "./actionTypes";

const initialState: PostState = {
  postList: [],
  isLoading: false,
  error: null,
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
        : action.payload.postList.map((post: IPost) => {
            if (post.id !== action.payload.postList[0].id) return post;
            return {
              ...post,
              opened: true,
            };
          });
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
        postList: state.postList.map((post: IPost) => {
          if (post.id !== action.payload.postId) return post;
          return {
            ...post,
            opened: true,
          };
        }),
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
