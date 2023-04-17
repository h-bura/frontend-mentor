import { Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
const FOOTERS = [
  {
    title: "FRONTEND MENTOR",
    connections: ["Unlock Pro", "Contact us", "Blog"],
  },
  {
    title: "EXPLORE",
    connections: ["Challenges", "Solutions", "Resources"],
  },
  {
    title: "COMMUNITY",
    connections: ["Slack", "Guidelines", "FAQs"],
  },
  {
    title: "FOR COMPANIES",
    connections: ["Hire developers"],
  },
];
function Connections() {
  return (
    <Flex gap="20px" w="100%" justifyContent="space-between" flexWrap="wrap">
      {FOOTERS.map((footer, index) => (
        <Flex key={index} flexDirection="column">
          <Text
            w="auto"
            fontSize="14px"
            fontWeight="bold"
            fontFamily="Heebo, sans-serif;"
            letterSpacing="1px"
            white-space="nowrap"
          >
            {footer.title}
          </Text>
          <Flex
            flexDirection="column"
            fontSize="15px"
            mt="20px"
            color="rgb(115, 115, 115)"
            gap="8px"
          >
            {footer.connections.map((connection) => (
              <Link key={connection}>{connection}</Link>
            ))}
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default Connections;
