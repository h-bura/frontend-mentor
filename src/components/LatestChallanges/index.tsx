import {
  Box,
  Button,
  Center,
  Flex,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import ChallangeCard from "./ChallangeCard";
import { CHALLANGES_DATA } from "./ChallangesData";

function LatestChallenge() {
  const [isLargerThan697, isLargerThan1310] = useMediaQuery([
    "(min-width: 697px)",
    "(min-width: 1310px)",
  ]);
  return (
    <>
      <Box
        height={isLargerThan697 ? "350px" : "700px"}
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
          mt={isLargerThan697 ? "-225px" : "-600px"}
          mx="30px"
        >
          {CHALLANGES_DATA.map((item, index) => (
            <ChallangeCard
              key={index}
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
