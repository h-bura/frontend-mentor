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
    <VStack mx="30px" mb="50px">
      <Center>
        <Icon size="70" color="rgb(62, 84, 163)" />
      </Center>

      <Heading fontSize="30px" fontWeight="600" py="20px">
        {title}
      </Heading>

      <Text textAlign="center" fontSize="19px" fontWeight="500px">
        {description}
      </Text>
    </VStack>
  );
}

export default ItemCard;
