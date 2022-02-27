import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import EmptyPostDetail from "./EmptyPostDetail";
import ImageContainer from "./ImageContainer";
import NoImageContainer from "./NoImageContainer";

function PostDetail() {
  const selectedPost: IPost | undefined = useSelector((state: PostState) =>
    state.postList.find((post) => post.id === state.selectedPostId)
  );

  if (!selectedPost) {
    return <EmptyPostDetail />;
  }

  return (
    <Flex w="full" flexGrow="1" justifyContent="center">
      <Flex
        flexDir="column"
        align="center"
        m="20px"
        bg="whiteAlpha.600"
        borderRadius="10px"
        gap="10px"
        flexGrow="1"
        maxW="800px"
        overflowY="auto"
      >
        <Heading size="md" pt="10px" px="20px">
          {selectedPost.author}
        </Heading>
        {selectedPost.image && (
          <ImageContainer src={selectedPost.image} isThumbnail={false} />
        )}
        {!selectedPost.image && selectedPost.thumbnail && (
          <ImageContainer src={selectedPost.thumbnail} isThumbnail={true} />
        )}

        {!selectedPost.image && !selectedPost.thumbnail && <NoImageContainer />}

        <Flex px="20px" w="full" fontSize="sm" color="gray.600">
          <Box>{selectedPost.created}</Box>
          <Spacer />
          <Box>{selectedPost.numComments} comments</Box>
        </Flex>
        <Box h="300px" px="20px" w="full">
          {selectedPost.title}
        </Box>
      </Flex>
    </Flex>
  );
}

export default PostDetail;
