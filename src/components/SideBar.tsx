import { Flex } from "@chakra-ui/react";

import PostList from "./PostList";

function SideBar() {
  return (
    <Flex
      pos="sticky"
      bg="whiteAlpha.600"
      w="400px"
      p="10px"
      flexDir="column"
      boxShadow="lg"
      flex="0 0 auto"
    >
      <PostList />
    </Flex>
  );
}

export default SideBar;
