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

import image5 from "../image/image5.jpg";

function Challange5() {
  return (
    <Card w="100%" h="750px">
      <CardBody>
        <Image src={image5} borderRadius="lg" _hover={{ cursor: "pointer" }} />
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
            Single-page developer portfolio
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
            <ListItem
              display="inline-flex"
              border="1px solid  rgb(170, 215, 66)"
              width="100%"
              height="30px"
              borderRadius="5px"
              color=" rgb(170, 215, 66)"
              fontWeight="bold"
              flexDirection="row"
              mr="20px"
              ml="120px"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: " rgb(170, 215, 66)",
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
                2
              </span>
              <span
                style={{
                  fontSize: "17px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                JUNIOR
              </span>
            </ListItem>
          </List>
          <Text
            fontSize="22px"
            fontWeight="400px"
            pt="15px"
            color="rgb(115, 115, 115)"
          >
            Test your HTML and CSS skills with this portfolio site. Basic JS
            knowledge is needed for the form validation. You can even customize
            and use this as your own site!
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Challange5;
