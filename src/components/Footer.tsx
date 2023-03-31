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
import FmLogo from "./FmLogo";
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
function Footer() {
  return (
    <>
      <Box mt="180px" mb="50px">
        <Flex>
          <FmLogo />
          <Spacer />
          <Flex gap="40px" mr="80px">
            <Icon as={BsTwitter} w={9} h={9} color="rgb(106, 190, 205)" />
            <Icon as={AiFillLinkedin} w={9} h={9} color="rgb(106, 190, 205)" />
            <Icon as={BsFacebook} w={9} h={9} color="rgb(106, 190, 205)" />
          </Flex>
        </Flex>
      </Box>
      <Flex ml="50px" mb="60px" mr="90px">
        <Flex flexDirection="column" w="600px">
          <Text fontSize="4xl" fontWeight="bold" color="rgb(62, 84, 163)">
            Stay up to date
          </Text>
          <Text pt="30px" fontSize="20px" w="400px">
            with new challenges, featured solutions, selected articles and our
            latest news
          </Text>
          <HStack pt="30px">
            <Input
              placeholder="email.example.com"
              border="0.5px solid rgb(219, 229, 230)"
              w="350px"
              h="50px"
              type="email"
              fontSize="25px"
            ></Input>
            <Button
              w="200px"
              h="60px"
              bgColor="red"
              borderLeftRadius="full"
              borderRightRadius="full"
              color="white"
              fontSize="25px"
            >
              SUBSCRIBE
            </Button>
          </HStack>
        </Flex>
        <Spacer />
        <Flex gap="120px">
          {FOOTERS.map((footer) => (
            <Flex flexDirection="column">
              <Flex
                fontSize="21px"
                fontWeight="bold"
                fontFamily="Heebo, sans-serif;"
                letterSpacing="2px"
              >
                {footer.title}
              </Flex>
              <Flex
                flexDirection="column"
                fontSize="20px"
                mt="20px"
                color="rgb(115, 115, 115)"
                gap="10px"
              >
                {footer["connections"].map((connection) => (
                  <Link>{connection}</Link>
                ))}
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Divider />
      <Flex
        h="80px"
        alignItems="center"
        color="rgb(115, 115, 115)"
        fontWeight="400px"
      >
        <Text ml="50px" fontSize="22px">
          © Frontend Mentor 2019 - 2023
        </Text>
        <Spacer />
        <Flex gap="30px" mr="50px" fontSize="20px">
          <Link>Terms</Link>
          <Link>Cookie Policy</Link>
          <Link>Privacy Policy</Link>
          <Link>License</Link>
        </Flex>
      </Flex>
    </>
  );
}

export default Footer;
