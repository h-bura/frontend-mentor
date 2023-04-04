import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React from "react";

import NewChallangeCard from "./NewChallangeCard";
import { NEW_CHALLANGES_DATA } from "./ChallangeData";

function NewLatestChallenge() {
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
          {NEW_CHALLANGES_DATA.map((item) => (
            <NewChallangeCard
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

export default NewLatestChallenge;
