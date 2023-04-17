import { Button, Flex, Image, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import image from "../../image/homepage-hero.webp";
import GitHub from "../../Icons/GitHub";
function Menu() {
  const [isLargerThan1040] = useMediaQuery("(min-width: 1040px)");
  return (
    <Flex mt="90px" mx="50px">
      <Flex
        flexDirection="column"
        width="100%"
        alignItems="flex-start"
        pl={isLargerThan1040 ? "30px" : "0px"}
      >
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

      <Flex
        w="100%"
        justifyContent="center"
        display={isLargerThan1040 ? "flex" : "none"}
      >
        <Image display="inline" w="480px" h="415px" src={image} />
      </Flex>
    </Flex>
  );
}

export default Menu;
