import { Box, CloseButton, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import LearnAbout from "../LearnAbout";
import { Filters } from "../Utils";

function CloseButtonMenu(
  sortFilters: Filters,
  priceHandler: (item: string) => void,
  difficultyHandler: (item: string) => void,
  languageHandler: (item: string) => void
) {
  return (
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
      <LearnAbout />
    </Box>
  );
}

export default CloseButtonMenu;
