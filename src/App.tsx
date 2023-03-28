import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWork from "./components/HowItWork";
import LatestChallenge from "./components/LatestChallenge";
import Menu from "./components/Menu";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Navbar />
    <Menu />
    <HowItWork />
    <LatestChallenge />
  </ChakraProvider>
);
