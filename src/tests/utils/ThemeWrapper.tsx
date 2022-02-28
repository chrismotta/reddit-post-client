import { ChakraProvider } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};
function ThemeWrapper({ children }: Props) {
  return <ChakraProvider>{children}</ChakraProvider>;
}

export default ThemeWrapper;
