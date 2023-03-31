import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../../image/homepage-hero.webp";
import GitHub from "../GitHub";
function Menu() {
  return (
    <Flex mt="100px" mx="200px">
      <Flex direction="column" width="100%" alignItems="flex-start">
        <Text
          fontSize="65px"
          color=" rgb(62, 84, 163)"
          width="100%"
          mb="50px"
          fontWeight="500"
        >
          Improve your front-end coding skills by building real projects
        </Text>
        <Text fontSize="25px" color="rgb(28, 32, 34)" width="100%">
          Solve real-world HTML, CSS and JavaScript challenges whilst working to
          professional designs. Join 587.077 developers building projects,
          reviewing code, and helping each other get better.
        </Text>
        <Button
          h="60px"
          w="350px"
          bg="red"
          color="white"
          _hover={{ textDecoration: "none", cursor: "pointer" }}
          rightIcon={<GitHub />}
          borderRadius="25px"
          mt="50px"
          fontSize="20px"
        >
          LOG IN WITH GITHUB
        </Button>
      </Flex>

      <Flex ml="200px" width="100%">
        <Image objectFit="cover" src={image} />
      </Flex>
    </Flex>
  );
}

export default Menu;
