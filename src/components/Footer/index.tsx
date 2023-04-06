import {
  Box,
  Button,
  HStack,
  Input,
  Text,
  Icon,
  Flex,
  Divider,
  Spacer,
  Link,
} from "@chakra-ui/react";
import FmLogo from "../FmLogo";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
const FOOTERS = [
  {
    title: "FRONTEND MENTOR",
    connections: ["Unlock Pro", "Contact us", "Blog"],
  },
  {
    title: "EXPLORE",
    connections: ["Challenges", "Solutions", "Resources"],
  },
  {
    title: "COMMUNITY",
    connections: ["Slack", "Guidelines", "FAQs"],
  },
  {
    title: "FOR COMPANIES",
    connections: ["Hire developers"],
  },
];
const CONNECTS = ["Terms", "Cookie Policy", "Privacy Policy", "License"];
function Footer() {
  return (
    <>
      <Box mt="190px" mb="50px">
        <Flex>
          <FmLogo />
          <Spacer />
          <Flex gap="40px" mr="40px">
            <Icon as={BsTwitter} w={7} h={7} color="rgb(106, 190, 205)" />
            <Icon as={AiFillLinkedin} w={7} h={7} color="rgb(106, 190, 205)" />
            <Icon as={BsFacebook} w={7} h={7} color="rgb(106, 190, 205)" />
          </Flex>
        </Flex>
      </Box>
      <Flex mx="40px" pt="10px" mb="67px">
        <Flex flexDirection="column" w="600px" mr="40px">
          <Text fontSize="30px" fontWeight="bold" color="rgb(62, 84, 163)">
            Stay up to date
          </Text>
          <Text pt="15px" fontSize="18px" w="400px" pr="15px">
            with new challenges, featured solutions, selected articles and our
            latest news
          </Text>
          <HStack pt="18px">
            <Input
              placeholder="email@example.com"
              border="0.5px solid rgb(219, 229, 230)"
              w="230px"
              h="40px"
              type="email"
              fontSize="20px"
            />
            <Button
              w="150px"
              h="50px"
              bgColor="red"
              borderLeftRadius="full"
              borderRightRadius="full"
              color="white"
              fontSize="20px"
            >
              SUBSCRIBE
            </Button>
          </HStack>
        </Flex>
        <Spacer />
        <Flex gap="10px" w="800px" justifyContent="flex-end">
          {FOOTERS.map((footer, index) => (
            <Flex key={index} flexDirection="column">
              <Text
                fontSize="14px"
                fontWeight="bold"
                fontFamily="Heebo, sans-serif;"
                letterSpacing="1px"
              >
                {footer.title}
              </Text>
              <Flex
                flexDirection="column"
                fontSize="15px"
                mt="20px"
                color="rgb(115, 115, 115)"
                gap="8px"
              >
                {footer.connections.map((connection) => (
                  <Link key={connection}>{connection}</Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Divider />
      <Flex
        h="65px"
        alignItems="center"
        color="rgb(115, 115, 115)"
        fontWeight="400px"
      >
        <Text ml="50px" fontSize="18px">
          © Frontend Mentor 2019 - 2023
        </Text>
        <Spacer />
        <Flex gap="30px" mr="50px" fontSize="18px">
          {CONNECTS.map((connect) => (
            <Link key={connect}>{connect}</Link>
          ))}
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
