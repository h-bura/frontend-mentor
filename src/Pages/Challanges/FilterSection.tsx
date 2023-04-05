import {
  Box,
  Checkbox,
  CheckboxGroup,
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
import { RiArrowDropDownLine } from "react-icons/ri";
import { Difficulty, Filters } from "./Utils";
const PRICE_TYPES = ["Free", "Free+", "Premium"];
const DIFFICULTY_TYPES = [
  "NEWBIE",
  "JUNIOR",
  "INTERMEDIATE",
  "ADVANCED",
  "GURU",
];
const LANGUAGE_TYPES = ["HTML", "CSS", "JS", "API"];
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
      setSortFilters({ ...sortFilters, type: [...sortFilters.type, item] });
    } else {
      setSortFilters({ ...sortFilters, type: [...sortFilters.type, item] });
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
          <Flex
            borderLeft="1px solid rgb(219, 229, 230)"
            borderRight="1px solid rgb(219, 229, 230)"
          >
            <Menu>
              <MenuButton px=" 30px">
                <Flex>
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
                    fontSize="40px"
                    color="grey"
                    alignSelf="center"
                  >
                    <RiArrowDropDownLine />
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList fontSize="20px">
                <MenuItem>Most Recent</MenuItem>
                <MenuItem onClick={() => setSortMethod("easy")}>
                  Difficultly(easier first)
                </MenuItem>
                <MenuItem onClick={() => setSortMethod("hard")}>
                  Difficultly(hard first)
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
                    fontSize="40px"
                    color="grey"
                    alignSelf="center"
                  >
                    <RiArrowDropDownLine />
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList fontSize="20px">
                <MenuGroup color="rgb(214, 214, 214)" title="TYPE">
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {PRICE_TYPES.map((item) => (
                        <Box borderTop="1px solid grey">
                          <Checkbox
                            size="lg"
                            p="6px"
                            value={item}
                            onClick={() => priceHandler(item)}
                            key={item}
                          >
                            {item}
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup color="rgb(214, 214, 214)" title="DIFFICULTY">
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {DIFFICULTY_TYPES.map((item) => (
                        <Box borderTop="1px solid grey">
                          <Checkbox size="lg" p="6px" value={item}>
                            {item}
                          </Checkbox>
                        </Box>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
                <MenuDivider />
                <MenuGroup color="rgb(214, 214, 214)" title="LANGUAGES">
                  <CheckboxGroup colorScheme="blue">
                    <Flex flexDirection="column">
                      {LANGUAGE_TYPES.map((item) => (
                        <>
                          <Box borderTop="1px solid grey">
                            <Checkbox size="lg" p="6px" value={item}>
                              {item}
                            </Checkbox>
                          </Box>
                        </>
                      ))}
                    </Flex>
                  </CheckboxGroup>
                </MenuGroup>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
      </Flex>
      <Box pt="15px" pr="90px">
        <Text display="flex" justifyContent="end" fontWeight="bold">
          Learn about our challenge types
        </Text>
      </Box>
    </>
  );
}

export default FilterSection;
