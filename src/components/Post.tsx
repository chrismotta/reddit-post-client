import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Spacer, Text } from "@chakra-ui/react";

function Post() {
  return (
    <Flex gap="10px">
      <Image
        boxSize="140px"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Title"
        borderRadius="5px"
      />
      <Box>
        <Flex alignItems="baseline">
          <Text fontSize="xs">2 hours ago :: 256 comments</Text>
          <Spacer />
          <IconButton
            aria-label="Show Post List"
            icon={<DeleteIcon />}
            size="xs"
            variant="ghost"
          />
        </Flex>
        <Text fontSize="sm">
          <Text display="inline" fontWeight="bold" mr="5px">
            creator
          </Text>{" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </Box>
    </Flex>
  );
}

export default Post;
