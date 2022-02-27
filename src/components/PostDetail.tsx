import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";

function PostDetail() {
  return (
    <Flex
      flexDir="column"
      align="center"
      m="20px"
      bg="whiteAlpha.600"
      flexGrow="1"
      borderRadius="10px"
      gap="10px"
    >
      <Heading size="md" pt="10px" px="20px">
        Creator
      </Heading>

      <Box
        h="500px"
        w="full"
        backgroundImage="url('https://bit.ly/dan-abramov')"
        backgroundPosition="center"
        backgroundSize="cover"
      >
        <Box w="full" h="full" bg="whiteAlpha.600" backdropFilter="blur(10px)">
          <Image
            boxSize="full"
            objectFit="contain"
            src="https://bit.ly/dan-abramov"
            alt="Title"
          />
        </Box>
      </Box>
      <Flex px="20px" w="full" fontSize="sm" color="gray.600">
        <Box>2 hours ago</Box>
        <Spacer />
        <Box>256 comments</Box>
      </Flex>
      <Box h="300px" px="20px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Box>
    </Flex>
  );
}

export default PostDetail;
