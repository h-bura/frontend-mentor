import {
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Spacer,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import { DIFFICULTY_TYPES } from "../../Pages/Challanges/FilterSection/DataSection";
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

function ChallangeCard({
  image,
  price,
  title,
  techs,
  level,
  description,
}: CardProps) {
  const [isLargerThan1640, isLargerThan1310] = useMediaQuery([
    "(min-width: 1640px)",
    "(min-width: 1310px)",
  ]);
  return (
    <>
      <Card
        width={isLargerThan1640 ? "380px" : "300px"}
        height="530px"
        marginTop="20px"
        // style={
        //   isLargerThan1600
        //     ? { width: "370px", height: "530px", marginTop: "20px" }
        //     : { width: "309px", height: "530px", marginTop: "20px" }
        // }
        marginX={isLargerThan1310 ? "" : "5px"}
      >
        <Flex
          justifyContent="flex-end"
          position="relative"
          top="20px"
          right="15px"
          zIndex="1"
        >
          <Text
            display="inline-flex"
            color={price === "FREE" ? "rgb(62, 84, 163)" : "white"}
            backgroundColor={
              price === "FREE" ? "rgb(231, 235, 249)" : "rgb(62, 84, 163)"
            }
            borderRadius="5rem"
            fontSize="15px"
            justifyContent="center"
            alignItems="center"
            width="90px"
            p="3px 7px"
            fontWeight="bold"
          >
            {price}
          </Text>
        </Flex>
        <CardBody position="absolute">
          <Image
            w="100%"
            h="175.83px"
            src={image}
            borderRadius="lg"
            _hover={{ cursor: "pointer" }}
          />

          <Stack>
            <Heading
              fontSize="27px"
              as="button"
              _hover={{ textDecoration: "underline" }}
              textAlign="start"
              fontWeight="400px"
              lineHeight="30px"
            >
              {title}
            </Heading>

            <Flex flexWrap="wrap">
              <List
                display="inline-flex"
                gap="10px"
                fontSize="17px"
                lineHeight="50px"
              >
                {techs.map((item, index) => (
                  <ListItem
                    key={item}
                    color={TECH_COLORS[index]}
                    fontWeight="bold"
                  >
                    {item}
                  </ListItem>
                ))}
              </List>
              <Spacer />
              <List display="flex" alignItems="center">
                <ListItem
                  display="flex"
                  bg={LEVEL_COLORS[level - 1]}
                  color="white"
                  fontWeight="bold"
                  fontSize="15px"
                  w="20px"
                  borderLeftRadius="7px"
                  h="25px"
                  justifyContent="center"
                  alignItems="center"
                >
                  {level}
                </ListItem>

                <ListItem
                  fontSize="15px"
                  border={"1px solid"}
                  borderColor={LEVEL_COLORS[level - 1]}
                  fontWeight="bold"
                  color={LEVEL_COLORS[level - 1]}
                  borderRightRadius="7px"
                  justifyContent="center"
                  alignItems="center"
                  px="15px"
                  h="25px"
                >
                  {DIFFICULTY_TYPES[level - 1]}
                </ListItem>
              </List>
            </Flex>

            <Text fontSize="17px" fontWeight="400px" color="rgb(115, 115, 115)">
              {description}
            </Text>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
}

export default ChallangeCard;
