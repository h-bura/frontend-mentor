import * as React from "react";
import { ChakraProvider, theme, Text, HStack, Link } from "@chakra-ui/react";
import { BiBriefcase } from "react-icons/bi";
import Navbar from "./components/Navbar";
export const App = () => (
  <ChakraProvider theme={theme}>
    <HStack
      bg="rgb(62, 84, 163)"
      color="white"
      p="4"
      textAlign="center"
      fontSize="xl"
      as="b"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <BiBriefcase />

      <Text>Looking to hire developers?</Text>

      <Link textDecoration="underline" _hover={{ textDecoration: "none" }}>
        Visit our Hiring Platform
      </Link>
    </HStack>
    <Navbar />
  </ChakraProvider>
);
