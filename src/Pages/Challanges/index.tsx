import { Box, Button, Center, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { NEW_CHALLANGES_DATA } from "../newdata";
import NewChallangeCard from "../NewChallangeCard";
import NewChallange from "./NewChallange";

function Challanges() {
  return (
    <>
      <NewChallange />
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
              key={item.title}
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

export default Challanges;
