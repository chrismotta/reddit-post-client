import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";

import { API_ENDPOINT, PAGE_SIZE } from "../utils/constants";
import { loadPosts, loadPostSuccess } from "../store/actions";

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
      const posts: PostList = data.children.map(({ data }: any) => {
        const thumbnail = data.thumbnail.includes("http")
          ? data.thumbnail
          : undefined;
        const image = data.url.includes("https://i.redd.it/")
          ? data.url
          : undefined;

        return {
          id: data.name,
          title: data.title,
          author: data.author,
          created: DateTime.fromSeconds(data.created).toRelative(),
          numComments: data.num_comments,
          thumbnail,
          image,
        };
      });
      // console.table(posts);
      dispatch(loadPostSuccess(posts));
    } catch (error: any) {
      throw new Error("Function not implemented.");
    }
  };

  return { getPosts };
};

export default useFetchPosts;
