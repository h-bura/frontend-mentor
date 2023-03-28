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
import image2 from "../image/image2.jpg";
function Challange2() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image2} borderRadius="lg" _hover={{ cursor: "pointer" }} />
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
            Results summary component
          </Heading>
          <List display="inline-flex" gap="10px">
            <ListItem color="rgb(106, 190, 205)" as="b">
              HTML
            </ListItem>
            <ListItem color="rgb(62, 84, 163)" as="b">
              CSS
            </ListItem>
            <ListItem
              ml="100px"
              border="1px solid rgb(106, 190, 205)"
              width="90px"
              borderRadius="5px"
              color="rgb(106, 190, 205)"
              as="b"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgb(106, 190, 205)",
                  color: "white",
                  width: "20px",
                  height: "26px",
                  textAlign: "center",
                  justifyContent: "center",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                }}
              >
                1
              </span>{" "}
              NEWBİE
            </ListItem>
          </List>
          <Text>
            This challenge has something for everyone. It's a HTML and CSS only
            project, but we've also provided a JSON file of the test results for
            anyone wanting to practice JS.
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Challange2;
