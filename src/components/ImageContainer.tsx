import { Box, Image } from "@chakra-ui/react";

type Props = {
  isThumbnail?: boolean;
  src?: string;
};
function ImageContainer({ isThumbnail = false, src }: Props) {
  return (
    <Box
      h="500px"
      w="full"
      backgroundImage={`url('${src}')`}
      backgroundPosition="center"
      backgroundSize="cover"
    >
      <Box w="full" h="full" bg="whiteAlpha.600" backdropFilter="blur(10px)">
        <Image
          boxSize="full"
          objectFit={isThumbnail ? "none" : "contain"}
          src={src}
          alt="Title"
        />
      </Box>
    </Box>
  );
}

export default ImageContainer;
