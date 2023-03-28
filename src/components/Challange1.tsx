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
import image1 from "../image/image1.jpg";
function Challange1() {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image src={image1} borderRadius="lg" _hover={{ cursor: "pointer" }} />
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
          PREMİUM
        </span>
        <Stack mt="6" spacing="3">
          <Heading
            size="md"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
          >
            Workit landing page
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
            This HTML and CSS-only landing page will be an excellent test of
            your UI and responsive skills. There's also some fun to be had
            creating the curved section borders!
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default Challange1;
