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
    <VStack mx="30px">
      <Center>
        <Icon size="25%" color="rgb(62, 84, 163)" />
      </Center>

      <Heading
        key={title}
        fontSize="30px"
        fontWeight="600"
        pb="20px"
        pt="25px"
        textAlign="center"
      >
        {title}
      </Heading>

      <Text
        padding-bottom="50px"
        textAlign="center"
        fontSize="19px"
        fontWeight="500px"
      >
        {description}
      </Text>
    </VStack>
  );
}

export default ItemCard;
