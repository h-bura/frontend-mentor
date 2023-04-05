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
      mt="165px"
      mx="70px"
      bgColor="#5161B0"
      color="white"
      h="620px"
      borderRadius="15px"
    >
      <Center>
        <Image w="200px" mt="83px" src={SlackImage}></Image>
      </Center>
      <Heading textAlign="center" mt="42px" fontSize="17px">
        JOIN OUR SLACK COMMUNITY
      </Heading>
      <Text
        textAlign="center"
        mt="30px"
        fontSize="30px"
        px="40px"
        lineHeight="33px"
      >
        Join over 180.000 people taking the challenges, talking about their
        code, helping each other, and chatting about all things front-end!
      </Text>
      <Center mt="50px" px="60px">
        <Input
          fontSize="17px"
          color="grey"
          w="600px"
          bgColor="white"
          h="50px"
          placeholder="email@example.com"
        />
        <Button
          fontSize="18px"
          ml="30px"
          bgColor="white"
          color="blue.600"
          h="50px"
          borderLeftRadius="full"
          borderRightRadius="full"
          textAlign="center"
          w="250px"
        >
          REQUEST INVITE
        </Button>
      </Center>
    </Box>
  );
}

export default Slack;
