import {
  Card,
  CardBody,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import image3 from "../image/image3.jpg";
function Challange3() {
  return (
    <Card w="100%">
      <CardBody>
        <Image
          src={image3}
          borderRadius="lg"
          _hover={{
            cursor: "pointer",
          }}
        />
        <Text
          display="inline-flex"
          position="relative"
          bottom="320px"
          left="310px"
          color="white"
          backgroundColor="rgb(62, 84, 163)"
          borderRadius="5rem"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          width="120px"
          p="3px 7px"
          fontWeight="bold"
        >
          PREMIUM
        </Text>
        <Stack mt="6" spacing="3">
          <Heading
            fontSize="32px"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
            fontWeight="400px"
          >
            Dictionary web app
          </Heading>
          <List display="inline-flex" gap="10px" pt="10px" fontSize="22px">
            <ListItem color="rgb(106, 190, 205)" fontWeight="bold">
              HTML
            </ListItem>
            <ListItem color="rgb(62, 84, 163)" fontWeight="bold">
              CSS
            </ListItem>
            <ListItem color="rgb(207, 99, 144)" fontWeight="bold">
              JS
            </ListItem>
            <ListItem color="rgb(170, 215, 66)" fontWeight="bold">
              API
            </ListItem>
            <ListItem
              display="inline-flex"
              border="1px solid rgb(241, 182, 4)"
              width="100%"
              height="30px"
              borderRadius="5px"
              color="rgb(241, 182, 4)"
              fontWeight="bold"
              flexDirection="row"
              mr="7px"
              ml="15px"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgb(241, 182, 4)",
                  color: "white",
                  width: "30px",
                  textAlign: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  fontSize: "17px",
                }}
              >
                3
              </span>
              <span
                style={{
                  fontSize: "17px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                INTERMEDIATE
              </span>
            </ListItem>
          </List>

          <Text fontSize="22px" fontWeight="400px" pt="15px">
            In this project, you'll integrate with the Dictionary API to create
            a real-world dictionary web app. Additional tests include colour
            themes and font selection.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Challange3;
