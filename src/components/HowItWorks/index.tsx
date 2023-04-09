import { VStack, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import ItemCard from "./ItemCard";
import { ITEMS } from "./HowItWorksData";

function HowItWorks() {
  return (
    <>
      <VStack mt="150px" mx="30px">
        <Heading fontSize="17px" mb="50px">
          HOW IT WORKS
        </Heading>
        <Flex>
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
