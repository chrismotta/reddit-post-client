import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import Post from "./Post";
import RedditLogo from "../utils/reddit_logo.svg";
import useFetchPosts from "../hooks/useFetchPosts";
import PostSkeleton from "./PostSkeleton";
import { dismissAllPosts } from "../store/actions";
import { AnimatePresence } from "framer-motion";

type Props = {
  onSelect?: () => void;
};
function PostList({ onSelect }: Props) {
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
    <Flex flexDir="column" gap="f10px" overflow="hidden" h="full">
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
          _focus={{}}
        >
          Dismiss All Posts
        </Button>
      </Box>
      <Flex flexDir="column" gap="15px" overflowY="auto" overflowX="hidden">
        {isLoading && !postList.length ? (
          <>
            {[...Array(10)].map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </>
        ) : (
          <AnimatePresence>
            {postList.map((data) => (
              <Post
                key={data.id}
                data={data}
                selected={data.id === selectedPostId}
                opened={data.opened}
                onSelect={onSelect ?? undefined}
              />
            ))}
            <Box overflow="initial">
              <Button
                size="sm"
                w="full"
                colorScheme="purple"
                onClick={handleShowMore}
                disabled={isLoading}
                isLoading={isLoading}
                loadingText="Loading Posts..."
                _focus={{}}
              >
                Show More Posts
              </Button>
            </Box>
          </AnimatePresence>
        )}
      </Flex>
    </Flex>
  );
}

export default PostList;
