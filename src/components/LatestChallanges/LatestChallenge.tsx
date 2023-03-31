import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

import ChallangeCard from "../LatestChallanges/ChallangeCard";
import { CHALLANGES_DATA } from "../LatestChallanges/data";

function LatestChallenge() {
  return (
    <>
      <Box
        height="400px"
        bg="rgb(62, 84, 163 )"
        mt="100px"
        mx="50px"
        borderRadius="10px"
      >
        <Center h="120px" fontSize="22px" fontWeight="bold" color="white">
          LATEST CHALLENGES
        </Center>
      </Box>
      <Center>
        <Flex
          mx="150px"
          flexWrap="wrap"
          justifyContent="space-around"
          mt="-250px"
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
      <Center mt="20px">
        <Button
          textAlign="center"
          textDecoration="underline red"
          fontSize="25px"
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
