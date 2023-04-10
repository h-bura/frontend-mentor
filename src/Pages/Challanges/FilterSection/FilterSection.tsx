import { Flex, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Difficulty, Filters } from "../Utils";
import SortByMenu from "./SortByMenu";
import FilterByMenu from "./FilterByMenu";
import CloseButtonMenu from "./CloseButtonMenu";
type FilterSectionProps = {
  setSortMethod: React.Dispatch<React.SetStateAction<Difficulty>>;
  setSortFilters: React.Dispatch<React.SetStateAction<Filters>>;
  sortFilters: Filters;
};

function FilterSection({
  setSortMethod,
  setSortFilters,
  sortFilters,
}: FilterSectionProps) {
  const [buttonClickSort, setButtonClickSort] = useState(true);
  const [buttonClickFilter, setButtonClickFilter] = useState(true);
  const priceHandler = (item: string) => {
    if (sortFilters.type.includes(item)) {
      let filterType = [...sortFilters.type];
      filterType.forEach((element, index) => {
        if (element === item) filterType.splice(index, 1);
      });

      setSortFilters({
        ...sortFilters,
        type: filterType,
      });
    } else {
      setSortFilters({ ...sortFilters, type: [...sortFilters.type, item] });
    }
  };
  const difficultyHandler = (item: string) => {
    if (sortFilters.difficulty.includes(item)) {
      let filterType = [...sortFilters.difficulty];
      filterType.forEach((element, index) => {
        if (element === item) filterType.splice(index, 1);
      });

      setSortFilters({
        ...sortFilters,
        difficulty: filterType,
      });
    } else {
      setSortFilters({
        ...sortFilters,
        difficulty: [...sortFilters.difficulty, item],
      });
    }
  };
  const languageHandler = (item: string) => {
    if (sortFilters.languages.includes(item)) {
      let filterType = [...sortFilters.languages];
      filterType.forEach((element, index) => {
        if (element === item) filterType.splice(index, 1);
      });

      setSortFilters({
        ...sortFilters,
        languages: filterType,
      });
    } else {
      setSortFilters({
        ...sortFilters,
        languages: [...sortFilters.languages, item],
      });
    }
  };
  return (
    <>
      <Flex w="100%" h="55px" borderY="1px solid rgb(219, 229, 230)">
        <Flex
          ml="40px"
          borderLeft="1px solid rgb(219, 229, 230)"
          borderRight="1px solid rgb(219, 229, 230)"
        >
          <Text
            display="flex"
            w="200px"
            alignItems="center"
            justifyContent="center"
            fontSize="17px"
            fontWeight="bold"
            h="100%"
          >
            CHALLENGES
          </Text>
        </Flex>
        <Spacer />
        <Flex pr="30px">
          <SortByMenu
            buttonClickSort={buttonClickSort}
            setButtonClickSort={setButtonClickSort}
            setSortMethod={setSortMethod}
            setButtonClickFilter={setButtonClickFilter}
          />
          <FilterByMenu
            languageHandler={languageHandler}
            buttonClickFilter={buttonClickFilter}
            setButtonClickSort={setButtonClickSort}
            setButtonClickFilter={setButtonClickFilter}
            priceHandler={priceHandler}
            difficultyHandler={difficultyHandler}
            sortFilters={sortFilters}
          />
        </Flex>
      </Flex>
      <CloseButtonMenu
        sortFilters={sortFilters}
        priceHandler={priceHandler}
        difficultyHandler={difficultyHandler}
        languageHandler={languageHandler}
      />
    </>
  );
}

export default FilterSection;
