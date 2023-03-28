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
    <Card w="100%">
      <CardBody>
        <Image src={image1} borderRadius="lg" _hover={{ cursor: "pointer" }} />
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
            Workit landing page
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
          <Text fontSize="22px" fontWeight="400px" pt="15px">
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
