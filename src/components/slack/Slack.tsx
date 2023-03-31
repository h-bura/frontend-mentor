import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SlackImage from "../../image/logo-slack.svg";
function Slack() {
  return (
    <Box
      mt="160px"
      mx="90px"
      bgColor="#5161B0"
      color="white"
      h="750px"
      borderRadius="15px"
    >
      <Center>
        <Image w="270px" mt="120px" src={SlackImage}></Image>
      </Center>
      <Heading textAlign="center" mt="50px" fontSize="20px">
        JOIN OUR SLACK COMMUNITY
      </Heading>
      <Text textAlign="center" mt="40px" fontSize="38px" px="25px">
        Join over 180.000 people taking the challenges, talking about their
        code, helping each other, and chatting about all things front-end!
      </Text>
      <Center mt="50px">
        <Input
          fontSize="25px"
          color="grey"
          w="600px"
          bgColor="white"
          h="60px"
          placeholder="email@example.com"
        />
        <Button
          fontSize="25px"
          ml="60px"
          bgColor="white"
          color="blue.600"
          h="60px"
          borderLeftRadius="full"
          borderRightRadius="full"
          textAlign="center"
          px="40px"
        >
          REQUEST INVITE
        </Button>
      </Center>
    </Box>
  );
}

export default Slack;
