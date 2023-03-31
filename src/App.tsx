import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import LatestChallenge from "./components/LatestChallanges/LatestChallenge";
import Menu from "./components/menu/Menu";
import Slack from "./components/slack/Slack";
import Footer from "./components/footer/Footer";
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
