import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Post from "./Post";
import RedditLogo from "../utils/reddit_logo.svg";
import useFetchPosts from "../hooks/useFetchPosts";
import PostSkeleton from "./PostSkeleton";
import { dismissAllPosts } from "../store/actions";

function PostList() {
  const { getPosts } = useFetchPosts();
  const dispatch: Dispatch<PostAction> = useDispatch();
  const { postList, selectedPostId, isLoading } = useSelector(
    (state: PostState) => ({
      postList: state.postList,
      selectedPostId: state.selectedPostId,
      isLoading: state.isLoading,
    })
  );

  const handleDismissAll = () => dispatch(dismissAllPosts());
  const handleShowMore = () => getPosts();

  return (
    <Flex flexDir="column" gap="10px" overflow="hidden">
      <Flex gap="10px" p="10px 5px">
        <Image src={RedditLogo} alt="Reddit Logo" />
        <Heading size="md">Top Reddit Posts</Heading>
      </Flex>
      <Box overflow="initial">
        <Button
          size="sm"
          w="full"
          disabled={isLoading || !postList.length}
          colorScheme="pink"
          onClick={handleDismissAll}
        >
          Dismiss All Posts
        </Button>
      </Box>
      <Flex flexDir="column" gap="15px" overflowY="auto">
        {isLoading && !postList.length ? (
          <>
            {[...Array(10)].map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </>
        ) : (
          <>
            {postList.map((data) => (
              <Post
                key={data.id}
                data={data}
                selected={data.id === selectedPostId}
              />
            ))}
            <Box overflow="initial">
              <Button
                size="sm"
                w="full"
                colorScheme="purple"
                onClick={handleShowMore}
              >
                Show More Posts
              </Button>
            </Box>
          </>
        )}
      </Flex>
    </Flex>
  );
}

export default PostList;
