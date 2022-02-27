import { Box, Image, Link } from "@chakra-ui/react";

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
        <Link href={src} isExternal>
          <Image
            boxSize="full"
            objectFit={isThumbnail ? "none" : "contain"}
            src={src}
            alt="Title"
          />
        </Link>
      </Box>
    </Box>
  );
}

export default ImageContainer;
