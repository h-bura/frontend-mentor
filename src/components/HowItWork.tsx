import { VStack, Text, HStack, Center, Heading } from "@chakra-ui/react";
import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaLaptopCode, FaRegComments } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
const INCLUDES = [
  {
    id: 1,
    head: "Choose your challenge",
    paragraf:
      "Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.",
    icon: HiArrowDownTray,
  },
  {
    id: 2,
    head: "Code the design",
    paragraf:
      "Start the challenge and download all the starter files. We provide all the files you'll need to complete the challenge. Building it is up to you!",
    icon: FaLaptopCode,
  },
  {
    id: 3,
    head: "Submit your solution",
    paragraf:
      "Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.",
    icon: BsShare,
  },
  {
    id: 4,
    head: "Give others feedback",
    paragraf:
      "Thinking critically about other people's code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.",
    icon: FaRegComments,
  },
];

function HowItWork() {
  return (
    <>
      <VStack p="4" marginTop="150px">
        <Center
          color="rgb(28, 32, 34)"
          fontSize="15px"
          fontFamily="Heebo, sans-serif"
          fontWeight="700px"
        >
          <Heading fontSize="2xl">HOW IT WORKS</Heading>
        </Center>
        <HStack as="b" spacing="10" paddingTop="150px">
          {INCLUDES.map((item) => (
            <VStack>
              <Text>
                <item.icon size="50px" color="rgb(62, 84, 163)" />
              </Text>

              <Heading
                key={item.id}
                fontSize="22px"
                pb="50px"
                fontFamily="Barlow, san-serif"
              >
                {item.head}
              </Heading>
              <Text
                padding-bottom="50px"
                textAlign="center"
                fontSize="16px"
                fontFamily="Heebo, sans-serif"
                fontWeight="normal"
                color="rgb(115 115 155)"
              >
                {item.paragraf}
              </Text>
            </VStack>
          ))}
        </HStack>
      </VStack>
    </>
  );
}

export default HowItWork;
