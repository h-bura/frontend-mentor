import React from "react";
import { Flex, Spacer, Text, HStack, Divider, Button } from "@chakra-ui/react";
import FmLogo from "../FmLogo";
import GitHub from "../GitHub";
const HEADER_ITEMS = ["CHALLANGES", "SOLUTIONS", "RESOURCES"];
function Navbar() {
  return (
    <>
      <Flex p="4">
        <FmLogo />
        <Spacer />
        <HStack fontWeight="bold" spacing="10" fontSize="18px">
          {HEADER_ITEMS.map((item) => (
            <Text
              key={item}
              cursor="pointer "
              _hover={{ textDecoration: "underline red 25%" }}
            >
              {item}
            </Text>
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
