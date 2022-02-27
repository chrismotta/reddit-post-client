import { useEffect } from "react";
import { API_ENDPOINT, PAGE_SIZE } from "../utils/constants";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, loadPostSuccess } from "../store/actions";
import { DateTime } from "luxon";

const useFetchPosts = () => {
  const lastPostId: string | undefined = useSelector(
    (state: PostState) => state.lastPostId
  );
  const dispatch: Dispatch<PostAction> = useDispatch();

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    dispatch(loadPosts());
    try {
      const response = await fetch(
        `${API_ENDPOINT}?after=${lastPostId}&limit=${PAGE_SIZE}`
      );
      const { data } = await response.json();
      // console.log(data.children);
      const posts: PostList = data.children.map(
        ({
          data: { name, title, author, created, num_comments, thumbnail },
        }: any) => ({
          id: name,
          title,
          author,
          created: DateTime.fromSeconds(created).toRelative(),
          numComments: num_comments,
          thumbnail: thumbnail.includes("http") ? thumbnail : undefined,
        })
      );
      dispatch(loadPostSuccess(posts));
    } catch (error: any) {
      throw new Error("Function not implemented.");
    }
  };

  return { getPosts };
};

export default useFetchPosts;
