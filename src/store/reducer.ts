import * as actionTypes from "./actionTypes";

const initialState: PostState = {
  postList: [],
  isLoading: false,
  error: null,
};

const reducer = (state = initialState, action: PostAction): PostState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
