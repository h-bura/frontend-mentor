import { VStack, Heading, Flex } from "@chakra-ui/react";
import React from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import { FaLaptopCode, FaRegComments } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import ItemCard from "./ItemCard";
const ITEMS = [
  {
    title: "Choose your challenge",
    description:
      "Have a look through our collection of web designs. Pick one that you feel will be a nice challenge for you at this stage.",
    icon: HiArrowDownTray,
  },
  {
    title: "Code the design",
    description:
      "Start the challenge and download all the starter files. We provide all the files you'll need to complete the challenge. Building it is up to you!",
    icon: FaLaptopCode,
  },
  {
    title: "Submit your solution",
    description:
      "Post your solution on the platform for everyone to see and get feedback on your code from other developers in the community.",
    icon: BsShare,
  },
  {
    title: "Give others feedback",
    description:
      "Thinking critically about other people's code is a crucial skill. Help others while deepening your own knowledge by giving feedback on solutions.",
    icon: FaRegComments,
  },
];

function HowItWork() {
  return (
    <>
      <VStack mt="150px" mx="30px">
        <Heading fontSize="17px" mb="50px">
          HOW IT WORKS
        </Heading>
        <Flex>
          {ITEMS.map((item, index) => (
            <ItemCard
              key={index}
              Icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </Flex>
      </VStack>
    </>
  );
}

export default HowItWork;
