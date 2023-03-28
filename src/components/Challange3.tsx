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
    <Card maxW="sm">
      <CardBody>
        <Image
          src={image3}
          borderRadius="lg"
          _hover={{
            cursor: "pointer",
          }}
        />
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
            Dictionary web app
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
            <ListItem color="rgb(170, 215, 66)" as="b">
              API
            </ListItem>
          </List>
          <Text
            border="1px solid  rgb(241, 182, 4)"
            width="200px"
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
              3
            </span>
            INTERMEDIATE
          </Text>
          <Text>
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
