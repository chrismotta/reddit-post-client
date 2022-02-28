import { Flex, Skeleton } from "@chakra-ui/react";

function PostSkeleton() {
  return (
    <Flex gap="10px" title="Loading post...">
      <Skeleton w="140px" h="140px" flexShrink="0" />
      <Flex w="full" flexDir="column" gap="10px">
        <Skeleton w="full" h="16px" />
        <Skeleton w="full" h="80px" />
      </Flex>
    </Flex>
  );
}

export default PostSkeleton;
