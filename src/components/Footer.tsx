import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Text,
  VStack,
  Icon,
  Flex,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import FmLogo from "./FmLogo";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <>
      <Box display="inline-block" mt="180px" mb="50px">
        <Flex>
          <FmLogo />
          <Flex ml="1200px" gap="40px">
            <Icon as={BsTwitter} w={8} h={8} color="rgb(106, 190, 205)" />
            <Icon as={AiFillLinkedin} w={8} h={8} color="rgb(106, 190, 205)" />
            <Icon as={BsFacebook} w={8} h={8} color="rgb(106, 190, 205)" />
          </Flex>
        </Flex>
      </Box>
      <HStack>
        <Box display="inline-block" ml="70px">
          <Flex border="1px solid red" flexDirection="column">
            <Text fontSize="4xl" fontWeight="bold">
              Stay up to date
            </Text>
            <Text pt="30px" fontSize="20px" w="400px">
              with new challenges, featured solutions, selected articles and our
              latest news
            </Text>
            <HStack pt="30px">
              <Input
                placeholder="email.example.com"
                border="1px solid rgb(219, 229, 230)"
                size="lg"
              ></Input>
              <Button
                bgColor="red"
                borderLeftRadius="full"
                borderRightRadius="full"
                color="white"
              >
                SUBSCRIBE
              </Button>
            </HStack>
          </Flex>
        </Box>

        <Box display="inline-block" border="1px solid yellow">
          <Flex>
            <HStack gap="50px">
              <List>
                <ListItem fontSize="2xl">FRONTEND MENTOR</ListItem>

                <ListItem>Unlock Pro</ListItem>
                <ListItem>Contact us</ListItem>
                <ListItem>Blog</ListItem>
              </List>
              <List>
                <ListItem fontSize="2xl">EXPLORE</ListItem>

                <ListItem>Challenges</ListItem>
                <ListItem>Solution</ListItem>
                <ListItem>Resources</ListItem>
              </List>
              <List>
                <ListItem fontSize="2xl">COMMUNITY</ListItem>

                <ListItem>Slack</ListItem>
                <ListItem>Guidelines</ListItem>
                <ListItem>FAQs</ListItem>
              </List>
              <List>
                <ListItem fontSize="2xl">FOR COMPANIES</ListItem>
                <ListItem>Hire developers</ListItem>
              </List>
            </HStack>
          </Flex>
        </Box>
      </HStack>
    </>
  );
}

export default Footer;
