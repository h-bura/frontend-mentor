import { VStack, Heading, Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";
import { ITEMS } from "./HowItWorksData";

function HowItWorks() {
  const [isLargerThan800, isLargerThan780] = useMediaQuery([
    "(min-width: 800px)",
    "(min-width: 780px)",
  ]);
  return (
    <>
      <VStack mt="150px" mx="30px">
        <Heading fontSize="17px" mb="50px">
          HOW IT WORKS
        </Heading>
        <Flex flexDirection={isLargerThan800 ? "row" : "column"}>
          {ITEMS.map((item, index) => (
            <ItemCard
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Flex>
      </VStack>
    </>
  );
}

export default HowItWorks;
