import { Flex } from "@chakra-ui/react";

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
      SideBar
    </Flex>
  );
}

export default SideBar;
