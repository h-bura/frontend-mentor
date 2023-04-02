import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import LatestChallenge from "./components/LatestChallanges/LatestChallenge";
import Menu from "./components/Menu/Menu";
import Slack from "./components/Slack/Slack";
import Footer from "./components/Footer/Footer";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Navbar />
    <Menu />
    <HowItWork />
    <LatestChallenge />
    <Slack />
    <Footer />
  </ChakraProvider>
);
