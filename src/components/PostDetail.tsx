import { Box, Flex, forwardRef, Heading, Spacer } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";
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
    <MotionFlex
      w="full"
      flexGrow="1"
      justifyContent="center"
      initial="out"
      animate="in"
      exit="out"
      variants={{
        in: { opacity: 1 },
        out: { opacity: 0 },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
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
          <ImageContainer
            src={selectedPost.image}
            isThumbnail={false}
            title={selectedPost.title}
          />
        )}
        {!selectedPost.image && selectedPost.thumbnail && (
          <ImageContainer
            src={selectedPost.thumbnail}
            isThumbnail={true}
            title={selectedPost.title}
          />
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
    </MotionFlex>
  );
}
const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Flex ref={ref} {...chakraProps} />;
  })
);

export default PostDetail;
