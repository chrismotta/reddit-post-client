import { Box, Center, Container, Flex, useMediaQuery } from "@chakra-ui/react";

import Contents from "./components/Contents";
import DrawerSideBar from "./components/DrawerSideBar";
import SideBar from "./components/SideBar";

function App() {
  const [desktop] = useMediaQuery("(min-width: 500px)");

  return (
    <Flex w="100%" h="100vh" bgGradient="linear(to-b, gray.100, purple.100)">
      {desktop ? <SideBar /> : <DrawerSideBar />}
      <Contents />
    </Flex>
  );
}

export default App;
