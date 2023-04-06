import { Button, Center, Flex } from "@chakra-ui/react";
import React from "react";
import FilterSection from "./FilterSection";
import { useState, useEffect } from "react";
import NewChallangeCard from "./NewChallangeCard";

import getSortedData, { Difficulty, Filters } from "./Utils";

function Challanges() {
  const [sortMethod, setSortMethod] = useState<Difficulty>("normal");
  const [sortFilters, setSortFilters] = useState<Filters>({
    type: [],
    difficulty: [],
    languages: [],
  });
  const sortedData = getSortedData(sortMethod, sortFilters);
  return (
    <>
      <FilterSection
        setSortMethod={setSortMethod}
        setSortFilters={setSortFilters}
        sortFilters={sortFilters}
      />

      <Center>
        <Flex flexWrap="wrap" justifyContent="space-evenly" mx="30px">
          {sortedData.map((item) => (
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

export default Challanges;
