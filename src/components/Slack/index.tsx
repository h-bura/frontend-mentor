import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Input,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import SlackImage from "../../image/logo-slack.svg";
function Slack() {
  const [isLargerThan840] = useMediaQuery(["(min-width: 840px)"]);
  return (
    <Box
      mt="165px"
      mx="70px"
      bgColor="#5161B0"
      color="white"
      minH="620px"
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
      <Center
        mt="50px"
        px="60px"
        display="flex"
        flexDirection={isLargerThan840 ? "row" : "column"}
      >
        <Box>
          <Input
            mb="15px"
            fontSize="17px"
            color="grey"
            w={isLargerThan840 ? "30vw" : "70vw"}
            bgColor="white"
            h="50px"
            placeholder="email@example.com"
          />
        </Box>
        <Box>
          <Button
            fontSize="18px"
            ml="30px"
            mb="15px"
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
        </Box>
      </Center>
    </Box>
  );
}

export default Slack;
