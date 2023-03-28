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
import image4 from "../image/image4.jpg";
function Challange4() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image4} borderRadius="lg" _hover={{ cursor: "pointer" }} />
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
          FREE
        </span>
        <Stack mt="6" spacing="3">
          <Heading
            size="md"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
          >
            Multi-step form
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
              border="1px solid  rgb(241, 182, 4)"
              ml="25px"
              width="150px"
              borderRadius="5px"
              color="rgb(241, 182, 4)"
              as="b"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgb(241, 182, 4)",
                  color: "white",
                  width: "40px",
                  height: "26px",
                  textAlign: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                4
              </span>
              ADVANCED
            </ListItem>
          </List>
          <Text>
            An excellent test for your form-building and JS skills, this project
            will pose many challenges along the way to completion.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Challange4;
