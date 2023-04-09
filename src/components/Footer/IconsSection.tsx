import { Box, Flex, Spacer, Icon } from "@chakra-ui/react";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import FmLogo from "../FmLogo";

function IconsSection() {
  return (
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
  );
}

export default IconsSection;
