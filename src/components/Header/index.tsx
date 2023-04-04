import { HStack, Link, Text } from "@chakra-ui/react";
import React from "react";

function Header() {
  return (
    <HStack
      bg="rgb(62, 84, 163)"
      color="white"
      p="4"
      display="flex"
      fontSize="xl"
      as="b"
      alignItems="center"
      justifyContent="center"
    >
      <Text>Looking to hire developers?</Text>
      <Link textDecoration="underline" _hover={{ textDecoration: "none" }}>
        Visit our Hiring Platform
      </Link>
    </HStack>
  );
}

export default Header;
