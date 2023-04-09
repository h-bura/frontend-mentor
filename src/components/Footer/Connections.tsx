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
    <Flex gap="10px" w="800px" justifyContent="flex-end">
      {FOOTERS.map((footer, index) => (
        <Flex key={index} flexDirection="column">
          <Text
            fontSize="14px"
            fontWeight="bold"
            fontFamily="Heebo, sans-serif;"
            letterSpacing="1px"
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
