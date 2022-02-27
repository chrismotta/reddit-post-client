import { ViewOffIcon } from "@chakra-ui/icons";
import { Center, Flex, Heading } from "@chakra-ui/react";

function EmptyPostDetail() {
  return (
    <Flex w="full" flexGrow="1" justifyContent="center">
      <Center
        flexDir="column"
        m="20px"
        bg="whiteAlpha.600"
        flexGrow="1"
        borderRadius="10px"
        gap="5px"
        maxW="800px"
      >
        <ViewOffIcon boxSize="100px" color="gray.300" mb="10px" />
        <Heading size="lg" color="gray.300">
          No post selected
        </Heading>
        <Heading size="sm" color="gray.300">
          Select a post from the side bar to open it
        </Heading>
      </Center>
    </Flex>
  );
}

export default EmptyPostDetail;
