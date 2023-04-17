import React, { useState } from "react";
import {
  Flex,
  Spacer,
  Text,
  HStack,
  Divider,
  Button,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import FmLogo from "../../Icons/FmLogo";
import GitHub from "../../Icons/GitHub";
import { Link } from "react-router-dom";
import { BsGlobe, BsLaptop } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import { FiUnlock } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
const HEADER_ITEMS = [
  {
    title: "CHALLANGES",
    link: "/challanges",
  },
  {
    title: "SOLUTIONS",
    link: "/solutions",
  },
  {
    title: "RESOURCES",
    link: "/resources",
  },
];
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargerThan1020, isLargerThan780] = useMediaQuery([
    "(min-width: 1020px)",
    "(min-width: 780px)",
  ]);
  return (
    <>
      <Box
        display={!isLargerThan780 ? "flex" : "none"}
        flexDirection="column"
        px="15px"
      >
        <Box
          pt="10px"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size="40px" /> : <GiHamburgerMenu size="40px" />}
        </Box>

        <Box display={!menuOpen ? "none" : ""}>
          <Divider />
          {HEADER_ITEMS.map((item) => (
            <Box onClick={() => setMenuOpen(!menuOpen)}>
              <Link key={item.link} to={item.link}>
                <Flex py="20px">
                  <Box>
                    {item.title === "CHALLANGES" && <BsLaptop size="22px" />}
                    {item.title === "SOLUTIONS" && <BiCodeAlt size="22px" />}
                    {item.title === "RESOURCES" && <BsGlobe size="22px" />}
                  </Box>

                  <Text
                    fontSize="12px"
                    fontWeight="bold"
                    paddingLeft="10px"
                    cursor="pointer "
                  >
                    {item.title}
                  </Text>
                </Flex>
              </Link>
              <Divider />
            </Box>
          ))}
          <Flex py="20px" onClick={() => setMenuOpen(!menuOpen)}>
            {" "}
            <FiUnlock size="22px" />
            <Text
              paddingLeft="10px"
              cursor="pointer "
              fontSize="12px"
              fontWeight="bold"
            >
              UNLOCK
              <span
                style={{
                  display: "inline-block",
                  backgroundColor: "rgb(62, 84, 163)",
                  color: "white",
                  marginLeft: "10px",
                  width: "50px",
                  textAlign: "center",
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                PRO
              </span>
            </Text>
          </Flex>

          <Divider />
          <Button
            fontWeight="bold"
            bg="black"
            color="white"
            _hover={{ textDecoration: "none", cursor: "pointer" }}
            rightIcon={<GitHub />}
            borderRadius="25px"
            height="50px"
            mt="20px"
            w="100%"
          >
            LOG IN WITH GITHUB
          </Button>
        </Box>
      </Box>

      <Flex p="10px">
        <Box display={isLargerThan1020 ? "flex" : "none"}>
          <Link to="/">
            <FmLogo />
          </Link>
        </Box>
        <Spacer />
        <HStack
          display={isLargerThan780 ? "flex" : "none"}
          fontWeight="bold"
          spacing="20px"
          fontSize="13px"
        >
          {HEADER_ITEMS.map((item) => (
            <Link key={item.link} to={item.link}>
              <Text
                py="4px"
                cursor="pointer "
                _hover={{ borderBottom: "4px solid red" }}
              >
                {item.title}
              </Text>
            </Link>
          ))}
          <Text cursor="pointer " _hover={{ borderBottom: "4px solid red" }}>
            UNLOCK
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgb(62, 84, 163)",
                color: "white",
                marginLeft: "10px",
                width: "50px",
                textAlign: "center",
              }}
            >
              PRO
            </span>
          </Text>
          <Button
            as="b"
            bg="black"
            color="white"
            _hover={{ textDecoration: "none", cursor: "pointer" }}
            rightIcon={<GitHub />}
            borderRadius="25px"
            height="50px"
          >
            LOG IN WITH GITHUB
          </Button>
        </HStack>
      </Flex>
      <Divider />
    </>
  );
}

export default Navbar;
