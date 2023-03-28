import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Menu1 from "./components/Menu1";
import HowItWork from "./components/HowItWork";
import LatestChallenge from "./components/LatestChallenge";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Navbar />
    <Menu1 />
    <HowItWork />
    <LatestChallenge />
  </ChakraProvider>
);
