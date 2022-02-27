interface IPost {
  id: string;
  title: string;
  author: string;
  created: number;
  numComments: number;
  thumbnail?: string;
  image?: string;
}

type PostList = IPost[];

type PostState = {
  isLoading: boolean;
  postList: PostList;
  selectedPostId?: string;
  lastPostId?: string;
  error: string | null;
};

type PostAction = {
  type: string;
  payload: any;
};

// export type PostAction =
//   | { type: typeof actionTypes.LOAD_POSTS; payload: any }
//   | { type: typeof actionTypes.LOAD_POSTS_SUCCESS; payload: any }
//   | { type: typeof actionTypes.LOAD_POSTS_FAILURE; payload: any }
//   | { type: typeof actionTypes.OPEN_POST; payload: any }
//   | { type: typeof actionTypes.DISMISS_POST; payload: any }
//   | { type: typeof actionTypes.DISMISS_ALL_POSTS; payload: any };

type Dispatch = (action: PostAction) => PostAction;
