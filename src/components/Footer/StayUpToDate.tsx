import { Button, Flex, HStack, Input, Text } from "@chakra-ui/react";
import React from "react";

function StayUpToDate() {
  return (
    <Flex flexDirection="column" w="600px" mr="40px">
      <Text fontSize="30px" fontWeight="bold" color="rgb(62, 84, 163)">
        Stay up to date
      </Text>
      <Text pt="15px" fontSize="18px" w="400px" pr="15px">
        with new challenges, featured solutions, selected articles and our
        latest news
      </Text>
      <HStack pt="18px">
        <Input
          placeholder="email@example.com"
          border="0.5px solid rgb(219, 229, 230)"
          w="230px"
          h="40px"
          type="email"
          fontSize="20px"
        />
        <Button
          w="150px"
          h="50px"
          bgColor="red"
          borderLeftRadius="full"
          borderRightRadius="full"
          color="white"
          fontSize="20px"
        >
          SUBSCRIBE
        </Button>
      </HStack>
    </Flex>
  );
}

export default StayUpToDate;
