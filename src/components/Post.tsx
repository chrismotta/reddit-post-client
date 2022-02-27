import { MouseEvent } from "react";
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
import { useDispatch } from "react-redux";
import { Dispatch } from "redux";

import { dismissPost, openPost } from "../store/actions";

type Props = { data: IPost; selected: boolean };

function Post({ data, selected }: Props) {
  const dispatch: Dispatch<PostAction> = useDispatch();

  const handleSelect = () => {
    dispatch(openPost(data.id));
  };
  const handleDismiss = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(dismissPost(data.id));
  };

  return (
    <Flex
      gap="10px"
      pb="8px"
      onClick={!selected ? handleSelect : undefined}
      bg={selected ? "gray.200" : "transparent"}
      cursor={selected ? "default" : "pointer"}
      transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
      _hover={!selected ? { bg: "purple.100" } : undefined}
      _active={
        !selected
          ? {
              bg: "purple.200",
              transform: "scale(0.98)",
            }
          : undefined
      }
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
          bg="gray.300"
          borderRadius="5px"
          mt="8px"
        >
          <ViewOffIcon boxSize="50px" color="gray.400" />
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
            onClick={handleDismiss}
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
