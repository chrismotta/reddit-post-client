import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

import Post from "./Post";
import RedditLogo from "../utils/reddit_logo.svg";

function PostList() {
  return (
    <Flex flexDir="column" gap="10px" overflow="hidden">
      <Flex gap="10px" p="10px 5px">
        <Image src={RedditLogo} alt="Reddit Logo" />
        <Heading size="md">Top Reddit Posts</Heading>
      </Flex>
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
