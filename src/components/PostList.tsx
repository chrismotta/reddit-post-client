import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import Post from "./Post";
import RedditLogo from "../utils/reddit_logo.svg";
import useFetchPosts from "../hooks/useFetchPosts";
import PostSkeleton from "./PostSkeleton";

function PostList() {
  useFetchPosts();
  const { postList, selectedPostId, isLoading } = useSelector(
    (state: PostState) => ({
      postList: state.postList,
      selectedPostId: state.selectedPostId,
      isLoading: state.isLoading,
    })
  );

  return (
    <Flex flexDir="column" gap="10px" overflow="hidden">
      <Flex gap="10px" p="10px 5px">
        <Image src={RedditLogo} alt="Reddit Logo" />
        <Heading size="md">Top Reddit Posts</Heading>
      </Flex>
      <Box overflow="initial">
        <Button size="sm" w="full" disabled={isLoading} colorScheme="pink">
          Dismiss All Posts
        </Button>
      </Box>
      <Flex flexDir="column" gap="15px" overflowY="auto">
        {isLoading ? (
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
              <Button size="sm" w="full" colorScheme="purple">
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
