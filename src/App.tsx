import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import GenericPage from "./components/GenericPage";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Slack from "./components/Slack";
import Challanges from "./Pages/Challanges";
import Home from "./Pages/Home";

const MY_PAGES = [
  {
    path: "/",
    page: <Home />,
  },
  {
    path: "/challanges",
    page: <Challanges />,
  },
];

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Header />
      <GenericPage page={<Navbar />} />
      <Routes>
        {MY_PAGES.map((item) => (
          <Route path={item.path} element={<GenericPage page={item.page} />} />
        ))}
      </Routes>
      <GenericPage page={<Slack />} />
      <GenericPage page={<Footer />} />
    </BrowserRouter>
  </ChakraProvider>
);
