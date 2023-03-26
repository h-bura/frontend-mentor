import React from "react";
import { Flex, Spacer, Text, HStack, Divider, Button } from "@chakra-ui/react";
import FmLogo from "./FmLogo";
import GitHub from "./GitHub";
const HEADER_ITEMS = ["CHALLANGES", "SOLUTIONS", "RESOURCES"];
function Navbar() {
  return (
    <>
      <Flex p="4">
        <FmLogo />
        <Spacer />
        <HStack as="b" spacing="10" fontSize="14">
          {HEADER_ITEMS.map((item) => (
            <Text key={item} fontSize="18px">
              {item}
            </Text>
          ))}
          <Text fontSize="18px">
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
