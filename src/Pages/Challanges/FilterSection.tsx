import {
  Box,
  Checkbox,
  CheckboxGroup,
  CloseButton,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FcInfo } from "react-icons/fc";
import { Difficulty, Filters } from "./Utils";

const PRICE_TYPES = ["FREE", "FREE+", "PREMIUM"];
export const DIFFICULTY_TYPES = [
  "NEWBİE",
  "JUNIOR",
  "INTERMEDIATE",
  "ADVANCED",
  "GURU",
];
const LANGUAGE_TYPES = ["CSS", "JS", "API"];
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
  const [buttonClickSort, setButtonClickSort] = useState(true);
  const [buttonClickFilter, setButtonClickFilter] = useState(true);

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
          <Flex
            borderLeft="1px solid rgb(219, 229, 230)"
            borderRight="1px solid rgb(219, 229, 230)"
          >
            <Menu>
              <MenuButton
                _active={{ border: "3px dotted rgb(104, 190, 205)" }}
                _hover={{ bgColor: "rgb(240, 244, 244)" }}
                onClick={() => {
                  setButtonClickSort(!buttonClickSort);
                  setButtonClickFilter(true);
                }}
              >
                <Flex px=" 30px">
                  <Text
                    display="inline-flex"
                    fontSize="13px"
                    alignSelf="center"
                    fontWeight="bold"
                  >
                    SORT BY
                  </Text>
                  <Text
                    display="inline-flex"
                    fontSize="13px"
                    color="grey"
                    alignSelf="center"
                    ml="10px"
                  >
                    {buttonClickSort ? <SlArrowDown /> : <SlArrowUp />}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList fontSize="16px" w="285px">
                <MenuItem
                  color=" rgb(28, 32, 34)"
                  fontWeight="500"
                  h="40px"
                  onClick={() => setSortMethod("normal")}
                >
                  Most Recent
                </MenuItem>
                <Divider />
                <MenuItem
                  color=" rgb(28, 32, 34)"
                  fontWeight="500"
                  h="40px"
                  onClick={() => setSortMethod("easy")}
                >
                  Difficultly(easier first)
                </MenuItem>
                <Divider />
                <MenuItem
                  h="40px"
                  color=" rgb(28, 32, 34)"
                  fontWeight="500"
                  onClick={() => setSortMethod("hard")}
                >
                  Difficultly(harder first)
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
          <Flex>
            <Menu>
              <MenuButton
                fontSize="20px"
                px=" 30px"
                borderRight="1px solid rgb(219, 229, 230)"
                _active={{ border: "3px dotted rgb(104, 190, 205)" }}
                _hover={{ bgColor: "rgb(240, 244, 244)" }}
                onClick={() => {
                  setButtonClickFilter(!buttonClickFilter);
                  setButtonClickSort(true);
                }}
              >
                <Flex>
                  <Text
                    display="inline-flex"
                    fontSize="13px"
                    alignSelf="center"
                    fontWeight="bold"
                  >
                    FILTER BY
                  </Text>
                  <Text
                    display="inline-flex"
                    fontSize="13px"
                    color="grey"
                    alignSelf="center"
                    ml="10px"
                  >
                    {buttonClickFilter ? <SlArrowDown /> : <SlArrowUp />}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList w="285px" fontFamily="Barlow, sans-serif">
                <MenuGroup
                  color="rgb(214, 214, 214)"
                  py="5px"
                  fontStyle="italic"
                  fontWeight="600"
                  title="TYPE"
                >
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {PRICE_TYPES.map((item) => (
                        <Box
                          key={item}
                          borderTop="1px solid rgb(219, 229, 230)"
                        >
                          <Checkbox
                            h="45px"
                            size="lg"
                            p="11px"
                            value={item}
                            onChange={() => priceHandler(item)}
                            borderColor="rgb(62, 84, 163)"
                            id="checkId"
                          >
                            <Text
                              fontFamily="Barlow, sans-serif"
                              fontSize="15px"
                            >
                              {item.charAt(0) + item.toLowerCase().slice(1)}
                            </Text>
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup
                  color="rgb(214, 214, 214)"
                  py="5px"
                  title="DIFFICULTY"
                  fontStyle="italic"
                  fontWeight="600"
                >
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {DIFFICULTY_TYPES.map((item) => (
                        <Box
                          key={item}
                          borderTop="1px solid rgb(219, 229, 230)"
                        >
                          <Checkbox
                            size="lg"
                            p="11px"
                            value={item}
                            onChange={() => difficultyHandler(item)}
                            borderColor="rgb(62, 84, 163)"
                          >
                            <Text
                              fontFamily="Barlow, sans-serif"
                              fontSize="15px"
                            >
                              {item.charAt(0) + item.toLowerCase().slice(1)}
                            </Text>
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup
                  color="rgb(214, 214, 214)"
                  py="5px"
                  fontStyle="italic"
                  fontWeight="600"
                  title="LANGUAGES"
                >
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {LANGUAGE_TYPES.map((item) => (
                        <Box
                          key={item}
                          borderTop="1px solid rgb(219, 229, 230)"
                        >
                          <Checkbox
                            size="lg"
                            p="11px"
                            value={item}
                            onChange={() => languageHandler(item)}
                            borderColor="rgb(62, 84, 163)"
                          >
                            <Text
                              fontFamily="Barlow, sans-serif"
                              fontSize="15px"
                            >
                              {item}
                            </Text>
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>

      <Box pr="60px" h="30px" display="flex" mt="15px">
        {sortFilters.type.map((item) => (
          <Text
            key={item}
            fontSize="13px"
            color="white"
            bgColor={sortFilters.type.length ? "rgb(62, 84, 163)" : ""}
            borderRightRadius="full"
            borderLeftRadius="full"
            display="inline-flex"
            alignSelf="center"
            alignItems="center"
            px="10px"
            mx="7px"
            h="30px"
            fontWeight={"bold"}
          >
            {item}
            <CloseButton size="sm" onClick={() => priceHandler(item)} />
          </Text>
        ))}
        {sortFilters.difficulty.map((item) => (
          <Text
            key={item}
            fontSize="13px"
            color="white"
            bgColor={sortFilters.difficulty.length ? "rgb(62, 84, 163)" : ""}
            borderRightRadius="full"
            borderLeftRadius="full"
            display="inline-flex"
            alignSelf="center"
            alignItems="center"
            px="10px"
            mx="7px"
            h="30px"
            fontWeight={"bold"}
          >
            {item}
            <CloseButton size="sm" onClick={() => difficultyHandler(item)} />
          </Text>
        ))}
        {sortFilters.languages.map((item) => (
          <Text
            key={item}
            fontSize="13px"
            color="white"
            bgColor={sortFilters.languages.length ? "rgb(62, 84, 163)" : ""}
            borderRightRadius="full"
            borderLeftRadius="full"
            display="inline-flex"
            alignSelf="center"
            alignItems="center"
            px="10px"
            mx="7px"
            h="30px"
            fontWeight={"bold"}
          >
            {item}
            <CloseButton size="sm" onClick={() => languageHandler(item)} />
          </Text>
        ))}
        <Spacer />

        <Text
          display="inline-flex"
          justifyContent="end"
          fontWeight="600"
          alignItems="center"
          as="button"
          _hover={{ color: "grey" }}
        >
          Learn about our challenge types
          <Text ml="10px">
            <FcInfo size="20px" />
          </Text>
        </Text>
      </Box>
    </>
  );
}

export default FilterSection;
