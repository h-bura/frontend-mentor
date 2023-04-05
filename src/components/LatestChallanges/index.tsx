import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";

import ChallangeCard from "../LatestChallanges/ChallangeCard";
import { CHALLANGES_DATA } from "../LatestChallanges/data";

function LatestChallenge() {
  return (
    <>
      <Box
        height="350px"
        bg="rgb(62, 84, 163 )"
        mt="90px"
        mx="30px"
        borderRadius="10px"
      >
        <Center h="120px" fontSize="18px" fontWeight="bold" color="white">
          <Text mt="17px">LATEST CHALLENGES</Text>
        </Center>
      </Box>
      <Center>
        <Flex
          flexWrap="wrap"
          justifyContent="space-evenly"
          mt="-225px"
          mx="30px"
        >
          {CHALLANGES_DATA.map((item) => (
            <ChallangeCard
              image={item.image}
              title={item.title}
              price={item.price}
              techs={item.techs}
              level={item.level}
              description={item.description}
            />
          ))}
        </Flex>
      </Center>
      <Center mt="40px">
        <Button
          textAlign="center"
          textDecoration="underline red"
          fontSize="17px"
          bg="white"
          _hover={{ textDecoration: "none" }}
          mt="10px"
        >
          View all challenges
        </Button>
      </Center>
    </>
  );
}

export default LatestChallenge;
