import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import getSortedData, { Difficulty, Filters } from "./Utils";
import ChallangeCard from "../../components/LatestChallanges/ChallangeCard";
import FilterSection from "./FilterSection/FilterSection";
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
            <ChallangeCard
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
    </>
  );
}

export default Challanges;
