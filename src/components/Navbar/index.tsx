import React from "react";
import { Flex, Spacer, Text, HStack, Divider, Button } from "@chakra-ui/react";
import FmLogo from "../FmLogo";
import GitHub from "../GitHub";
import { Link } from "react-router-dom";
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
  return (
    <>
      <Flex p="4">
        <FmLogo />
        <Spacer />
        <HStack fontWeight="bold" spacing="10" fontSize="18px">
          {HEADER_ITEMS.map((item) => (
            <Link to={item.link}>
              <Text
                key={item.link}
                cursor="pointer "
                _hover={{ textDecoration: "underline red 25%" }}
              >
                {item.title}
              </Text>
            </Link>
          ))}
          <Text
            cursor="pointer "
            _hover={{ textDecoration: "underline red 25%" }}
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
