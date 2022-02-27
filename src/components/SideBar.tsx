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
    >
      <PostList />
    </Flex>
  );
}

export default SideBar;
