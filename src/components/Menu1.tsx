import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import image from "../image/homepage-hero.webp";
import GitHub from "./GitHub";
function Menu1() {
  return (
    <Flex mt="100px" mx="50px" textAlign="center">
      <Flex display="inline-block" width="700px" p="10px" textAlign="start">
        <Text
          fontSize="52px"
          color=" rgb(62, 84, 163)"
          width="600px"
          height="203px"
          mb="100px"
        >
          Improve your front-end coding skills by building real projects
        </Text>
        <Text
          fontSize="20px"
          color="rgb(28, 32, 34"
          width="600px"
          height="90px"
        >
          Solve real-world HTML, CSS and JavaScript challenges whilst working to
          professional designs. Join 587.077 developers building projects,
          reviewing code, and helping each other get better.
        </Text>
        <Button
          as="b"
          bg="red"
          color="white"
          _hover={{ textDecoration: "none", cursor: "pointer" }}
          rightIcon={<GitHub />}
          borderRadius="25px"
          height="50px"
          mt="50px"
        >
          LOG IN WITH GITHUB
        </Button>
      </Flex>
      <div style={{ width: "200px" }}></div>
      <Flex>
        <Image width="700px" height="513px" objectFit="cover" src={image} />
      </Flex>
    </Flex>
  );
}

export default Menu1;
