import { Box, Button, Flex, Heading } from "@chakra-ui/react";

import Post from "./Post";

function PostList() {
  return (
    <Flex flexDir="column" gap="10px" overflow="hidden">
      <Heading size="md">Top Reddit Posts</Heading>
      <Box overflow="initial">
        <Button size="sm" w="full">
          Dismiss All
        </Button>
      </Box>
      <Flex flexDir="column" gap="10px" overflowY="auto">
        {[...Array(10)].map((_, i) => (
          <Post key={i} />
        ))}
        <Box overflow="initial">
          <Button size="sm" w="full">
            Show More
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
}

export default PostList;
