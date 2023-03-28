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
    <Card w="100%" h="750px">
      <CardBody>
        <Image src={image2} borderRadius="lg" _hover={{ cursor: "pointer" }} />
        <Text
          display="inline-flex"
          position="relative"
          bottom="320px"
          left="310px"
          color="rgb(62, 84, 163)"
          backgroundColor="rgb(231, 235, 249)"
          borderRadius="5rem"
          fontSize="20px"
          justifyContent="center"
          alignItems="center"
          width="120px"
          p="3px 7px"
          fontWeight="bold"
        >
          FREE
        </Text>
        <Stack mt="6" spacing="3">
          <Heading
            fontSize="32px"
            as="button"
            _hover={{ textDecoration: "underline" }}
            textAlign="start"
            fontWeight="400px"
          >
            Results summary component
          </Heading>
          <List display="inline-flex" gap="10px" pt="10px" fontSize="22px">
            <ListItem color="rgb(106, 190, 205)" fontWeight="bold">
              HTML
            </ListItem>
            <ListItem color="rgb(62, 84, 163)" fontWeight="bold">
              CSS
            </ListItem>
            <ListItem
              display="inline-flex"
              ml="170px"
              mr="15px"
              border="1px solid rgb(106, 190, 205)"
              width="100%"
              height="30px"
              borderRadius="5px"
              color="rgb(106, 190, 205)"
              fontWeight="bold"
              flexDirection="row"
            >
              <span
                style={{
                  display: "inline-flex",
                  backgroundColor: "rgb(106, 190, 205)",
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
                1
              </span>
              <span
                style={{
                  fontSize: "17px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                }}
              >
                NEWBİE
              </span>
            </ListItem>
          </List>
          <Text
            fontSize="22px"
            fontWeight="400px"
            pt="15px"
            color="rgb(115, 115, 115)"
          >
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
