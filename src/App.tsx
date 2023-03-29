import * as React from "react";
import { Button, Center, ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import LatestChallenge from "./components/LatestChallenge";
import Menu from "./components/Menu";
import Slack from "./components/Slack";
import Footer from "./components/Footer";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Navbar />
    <Menu />
    <HowItWork />
    <LatestChallenge />
    <Center mt="20px">
      <Button
        textAlign="center"
        textDecoration="underline red"
        fontSize="25px"
        bg="white"
        _hover={{ textDecoration: "none" }}
        mt="10px"
      >
        View all challenges
      </Button>
    </Center>
    <Slack />
    <Footer />
  </ChakraProvider>
);
