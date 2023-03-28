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
    <Card w="100%">
      <CardBody>
        <Image src={image5} borderRadius="lg" _hover={{ cursor: "pointer" }} />
        <span
          style={{
            display: "flex",
            position: "relative",
            bottom: "220px",
            left: "220px",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "rgb(62, 84, 163)",
            borderRadius: "5rem",
            marginRight: "50px",
            width: "85px",
            height: "26px",
            fontSize: "14px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          PREMIUM
        </span>
        <Stack mt="6" spacing="3">
          <Heading
            size="md"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
          >
            Single-page developer portfolio
          </Heading>
          <List display="inline-flex" gap="10px">
            <ListItem color="rgb(106, 190, 205)" as="b">
              HTML
            </ListItem>
            <ListItem color="rgb(62, 84, 163)" as="b">
              CSS
            </ListItem>
            <ListItem color="rgb(207, 99, 144)" as="b">
              JS
            </ListItem>
            <ListItem
              border="1px solid  rgb(170, 215, 66)"
              ml="25px"
              width="150px"
              borderRadius="5px"
              color="rgb(170, 215, 66)"
              as="b"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgb(170, 215, 66)",
                  color: "white",
                  width: "40px",
                  height: "26px",
                  textAlign: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                2
              </span>
              JUNIOR
            </ListItem>
          </List>
          <Text>
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
