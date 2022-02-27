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
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

function PostListDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef<any>(null!);

  return (
    <>
      <IconButton
        aria-label="Show Post List"
        variant="outline"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
        pos="sticky"
        top="10px"
        left="10px"
        size="md"
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

          <DrawerBody>{/* <PostList /> */}SideBar</DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default PostListDrawer;
