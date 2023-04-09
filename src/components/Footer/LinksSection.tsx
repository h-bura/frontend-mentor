import { Flex, Link, Spacer, Text } from "@chakra-ui/react";
import React from "react";
const CONNECTS = ["Terms", "Cookie Policy", "Privacy Policy", "License"];
function LinksSection() {
  return (
    <Flex
      h="65px"
      alignItems="center"
      color="rgb(115, 115, 115)"
      fontWeight="400px"
    >
      <Text ml="50px" fontSize="18px">
        © Frontend Mentor 2019 - 2023
      </Text>
      <Spacer />
      <Flex gap="30px" mr="50px" fontSize="18px">
        {CONNECTS.map((connect) => (
          <Link key={connect}>{connect}</Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default LinksSection;
