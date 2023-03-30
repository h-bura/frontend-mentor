import {
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  List,
  ListItem,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

type CardProps = {
  image: any;
  price: string;
  title: string;
  techs: string[];
  level: number;
  description: string;
};
const TECH_COLORS = [
  "rgb(106, 190, 205)",
  "rgb(62, 84, 163)",
  "rgb(207, 99, 144)",
  "rgb(170, 215, 66)",
];
const LEVEL_COLORS = [
  "rgb(106, 190, 205)",
  "rgb(170, 215, 66)",
  "rgb(241, 182, 4)",
  "rgb(244, 137, 37)",
];

const LEVEL_TEXT = ["NEWBIE", "JUNIOR", "INTERMEDIATE", "ADVANCED"];
function ChallangeCard({
  image,
  price,
  title,
  techs,
  level,
  description,
}: CardProps) {
  return (
    <Card w="450px" h="750px" my="15px">
      <CardBody>
        <Image src={image} borderRadius="lg" _hover={{ cursor: "pointer" }} />
        <Text
          display="inline-flex"
          position="relative"
          bottom="300px"
          left="290px"
          color={price === "FREE" ? "rgb(62, 84, 163)" : "white"}
          backgroundColor={
            price === "FREE" ? "rgb(231, 235, 249)" : "rgb(62, 84, 163)"
          }
          borderRadius="5rem"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          width="120px"
          p="3px 7px"
          fontWeight="bold"
        >
          {price}
        </Text>
        <Stack mt="6" spacing="3">
          <Heading
            fontSize="32px"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
            fontWeight="400px"
          >
            {title}
          </Heading>
          <Box display="inline-flex" pt="10px">
            <List display="inline-flex" gap="10px" fontSize="22px">
              {techs.map((item, index) => (
                <ListItem color={TECH_COLORS[index]} fontWeight="bold">
                  {item}
                </ListItem>
              ))}
            </List>
            <Spacer />
            <List display="flex">
              <ListItem
                bg={LEVEL_COLORS[level - 1]}
                color="white"
                fontWeight="bold"
                fontSize="18px"
                w="30px"
                borderLeftRadius="7px"
                textAlign="center"
                h="100%"
              >
                {level}
              </ListItem>

              <ListItem
                fontSize="18px"
                border={"1px solid"}
                borderColor={LEVEL_COLORS[level - 1]}
                fontWeight="bold"
                color={LEVEL_COLORS[level - 1]}
                borderRightRadius="7px"
                justifyContent="center"
                px="15px"
                h="100%"
              >
                {LEVEL_TEXT[level - 1]}
              </ListItem>
            </List>
          </Box>
          <Text
            fontSize="22px"
            fontWeight="400px"
            pt="15px"
            color="rgb(115, 115, 115)"
          >
            {description}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ChallangeCard;
