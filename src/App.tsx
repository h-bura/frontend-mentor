import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Slack from "./components/Slack";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Challanges from "./Pages/Challanges";
import { Route, Routes } from "react-router";
export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/challanges" element={<Challanges />} />
      </Routes>
      <Slack />
      <Footer />
    </BrowserRouter>
  </ChakraProvider>
);
