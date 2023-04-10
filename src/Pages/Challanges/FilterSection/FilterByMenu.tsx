import {
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Filters } from "../Utils";
import { DIFFICULTY_TYPES, LANGUAGE_TYPES, PRICE_TYPES } from "./DataSection";
type CardProps = {
  setButtonClickFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setButtonClickSort: React.Dispatch<React.SetStateAction<boolean>>;
  buttonClickFilter: Boolean;
  priceHandler: (item: string) => void;
  difficultyHandler: (item: string) => void;
  sortFilters: Filters;
  languageHandler: (item: string) => void;
};

function FilterByMenu({
  setButtonClickFilter,
  setButtonClickSort,
  buttonClickFilter,
  priceHandler,
  difficultyHandler,
  sortFilters,
  languageHandler,
}: CardProps) {
  return (
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
                  <Box key={item} borderTop="1px solid rgb(219, 229, 230)">
                    <Checkbox
                      h="45px"
                      size="lg"
                      p="11px"
                      onChange={() => priceHandler(item)}
                      borderColor="rgb(62, 84, 163)"
                      isChecked={sortFilters.type.includes(item)}
                    >
                      <Text fontFamily="Barlow, sans-serif" fontSize="15px">
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
                  <Box key={item} borderTop="1px solid rgb(219, 229, 230)">
                    <Checkbox
                      size="lg"
                      p="11px"
                      onChange={() => difficultyHandler(item)}
                      borderColor="rgb(62, 84, 163)"
                      isChecked={sortFilters.difficulty.includes(item)}
                    >
                      <Text fontFamily="Barlow, sans-serif" fontSize="15px">
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
                  <Box key={item} borderTop="1px solid rgb(219, 229, 230)">
                    <Checkbox
                      size="lg"
                      p="11px"
                      onChange={() => languageHandler(item)}
                      borderColor="rgb(62, 84, 163)"
                      isChecked={sortFilters.languages.includes(item)}
                    >
                      <Text fontFamily="Barlow, sans-serif" fontSize="15px">
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
  );
}

export default FilterByMenu;
