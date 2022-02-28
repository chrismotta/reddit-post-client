import { useEffect } from "react";
import { Dispatch } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { DateTime } from "luxon";

import { IMAGE_PREFIX, THUMBNAIL_PREFIX } from "../utils/constants";
import { loadPosts, loadPostSuccess } from "../store/actions";
import { fetchPosts } from "../lib/api";

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

    const data = await fetchPosts(lastPostId);
    const posts: PostList = data.children.map(({ data }: any) => {
      const thumbnail = data.thumbnail.includes(THUMBNAIL_PREFIX)
        ? data.thumbnail
        : undefined;
      const image = data.url.includes(IMAGE_PREFIX) ? data.url : undefined;

      return {
        id: data.name,
        title: data.title,
        author: data.author,
        created: DateTime.fromSeconds(data.created).toRelative(),
        numComments: data.num_comments,
        thumbnail,
        image,
        opened: false,
      };
    });
    dispatch(loadPostSuccess(posts));
  };

  return { getPosts };
};

export default useFetchPosts;
