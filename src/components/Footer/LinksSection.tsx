import { Flex, Link, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
const CONNECTS = ["Terms", "Cookie Policy", "Privacy Policy", "License"];
function LinksSection() {
  const [isLargerThan1070] = useMediaQuery("(min-width: 1070px)");
  return (
    <Flex
      h="65px"
      alignItems="center"
      color="rgb(115, 115, 115)"
      fontWeight="400px"
    >
      <Text ml="50px" fontSize={isLargerThan1070 ? "18px" : "13px"}>
        © Frontend Mentor 2019 - 2023
      </Text>
      <Spacer />
      <Flex gap="30px" mr="50px" fontSize={isLargerThan1070 ? "18px" : "13px"}>
        {CONNECTS.map((connect) => (
          <Link key={connect}>{connect}</Link>
        ))}
      </Flex>
    </Flex>
  );
}

export default LinksSection;
