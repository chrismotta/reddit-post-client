import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
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
        aria-label="Show Post List"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
        pos="absolute"
        top="10px"
        left="10px"
        size="md"
        bg="whiteAlpha.600"
        shadow="md"
      />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="xs"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Create your account</DrawerHeader> */}

          <DrawerBody>
            <PostList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PostListDrawer;
