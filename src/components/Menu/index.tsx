import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../../image/homepage-hero.webp";
import GitHub from "../../Icons/GitHub";
function Menu() {
  return (
    <Flex mt="90px" mx="25px">
      <Flex direction="column" width="100%" alignItems="flex-start" mr="20px">
        <Text
          fontSize="50px"
          color=" rgb(62, 84, 163)"
          width="100%"
          mb="20px"
          fontWeight="500"
          lineHeight="65px"
        >
          Improve your front-end coding skills by building real projects
        </Text>
        <Text fontSize="20px" color="rgb(28, 32, 34)" width="100%">
          Solve real-world HTML, CSS and JavaScript challenges whilst working to
          professional designs. Join 587.077 developers building projects,
          reviewing code, and helping each other get better.
        </Text>
        <Button
          h="50px"
          w="275px"
          bg="red"
          color="white"
          _hover={{ textDecoration: "none", cursor: "pointer" }}
          rightIcon={<GitHub />}
          borderRadius="25px"
          mt="40px"
          fontSize="15px"
        >
          LOG IN WITH GITHUB
        </Button>
      </Flex>

      <Flex w="100%" h="100%" alignSelf="center">
        <Image src={image} />
      </Flex>
    </Flex>
  );
}

export default Menu;
