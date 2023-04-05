import { Center, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons/lib";

type CardProps = {
  Icon: IconType;
  title: string;
  description: string;
};
function ItemCard({ Icon, title, description }: CardProps) {
  return (
    <VStack m="12px">
      <Center>
        <Icon size="60" color="rgb(62, 84, 163)" />
      </Center>

      <Heading
        textAlign="center"
        fontSize="25px"
        fontWeight="600"
        pt="20px"
        pb="7px"
      >
        {title}
      </Heading>

      <Text textAlign="center" fontSize="15px" fontWeight="500" m="0px">
        {description}
      </Text>
    </VStack>
  );
}

export default ItemCard;
