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
      return {
        ...state,
        postList: [...state.postList, ...action.payload.postList],
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
      };
    case actionTypes.DISMISS_POST:
      return {
        ...state,
        postList: state.postList.filter(
          (post) => post.id !== action.payload.postId
        ),
      };
    default:
      return state;
  }
};

export default reducer;
