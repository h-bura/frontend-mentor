import React from "react";
import { Flex, Spacer, Text, HStack, Divider, Button } from "@chakra-ui/react";
import FmLogo from "./FmLogo";
import GitHub from "./GitHub";
function Navbar() {
  return (
    <>
      <Flex p="4">
        <FmLogo />
        <Spacer />
        <HStack as="b" spacing="10">
          <Text>CHALLANGES</Text>
          <Text>SOLUTIONS</Text>
          <Text>RESOURCES</Text>
          <Text>UNLOCK PRO</Text>
          <Button
            as="b"
            bg="black"
            color="white"
            _hover={{ textDecoration: "none", cursor: "pointer" }}
            rightIcon={<GitHub />}
          >
            LOG İN WİTH GITHUB
          </Button>
        </HStack>
      </Flex>
      <Divider />
    </>
  );
}

export default Navbar;
