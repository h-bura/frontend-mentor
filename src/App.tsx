import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
export const App = () => (
  <ChakraProvider theme={theme}>
    <Header />
    <Navbar />
  </ChakraProvider>
);
