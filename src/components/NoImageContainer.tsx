import { ViewOffIcon } from "@chakra-ui/icons";
import { Center, Heading } from "@chakra-ui/react";

function NoImageContainer() {
  return (
    <Center flexDir="column" bg="gray.400" gap="5px" w="full" h="500px">
      <ViewOffIcon boxSize="100px" color="gray.300" mb="10px" />
      <Heading size="lg" color="gray.300">
        No image available
      </Heading>
    </Center>
  );
}

export default NoImageContainer;
