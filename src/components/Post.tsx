import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { DeleteIcon, ViewOffIcon } from "@chakra-ui/icons";
import { openPost } from "../store/actions";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

type Props = { data: IPost; selected: boolean };

function Post({ data, selected }: Props) {
  const dispatch: Dispatch<PostAction> = useDispatch();

  const handleSelect = () => {
    dispatch(openPost(data.id));
  };
  return (
    <Flex
      gap="10px"
      pb="8px"
      as="button"
      onClick={handleSelect}
      disabled={selected}
      bg={selected ? "gray.200" : "transparent"}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={{ bg: "purple.100" }}
      _active={{
        bg: "purple.200",
        transform: "scale(0.98)",
      }}
    >
      {data.thumbnail ? (
        <Image
          boxSize="140px"
          objectFit="cover"
          src={data.thumbnail}
          alt="Title"
          borderRadius="5px"
          mt="8px"
        />
      ) : (
        <Center
          boxSize="140px"
          flexShrink="0"
          bg="gray.200"
          borderRadius="5px"
          mt="8px"
        >
          <ViewOffIcon boxSize="50px" color="gray.300" />
        </Center>
      )}
      <Box>
        <Flex alignItems="baseline">
          <Text fontSize="xs" color="gray.600">
            {data.created} :: {data.numComments} comments
          </Text>
          <Spacer />
          <IconButton
            title="Dismiss Post"
            aria-label="Dismiss Post"
            icon={<DeleteIcon />}
            size="xs"
            variant="ghost"
          />
        </Flex>
        <Box fontSize="sm" textAlign="left">
          <Text display="inline" fontWeight="bold" mr="5px">
            {data.author}
          </Text>
          {data.title}
        </Box>
      </Box>
    </Flex>
  );
}

export default Post;
