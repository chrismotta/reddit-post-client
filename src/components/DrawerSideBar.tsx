import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

import PostList from "./PostList";

function PostListDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>(null!);
  //TODO: make it inside scrollable
  return (
    <>
      <IconButton
        aria-label="Show Posts List"
        title="Show Posts List"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
        pos="absolute"
        top="10px"
        left="10px"
        size="md"
        bg="whiteAlpha.600"
        shadow="md"
        zIndex="1000"
        _focus={{}}
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton _focus={{}} />
          <DrawerBody>
            <PostList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PostListDrawer;
