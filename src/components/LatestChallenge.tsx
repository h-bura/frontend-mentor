import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Challange1 from "./Challange1";
import Challange2 from "./Challange2";
import Challange3 from "./Challange3";
import Challange4 from "./Challange4";
import Challange5 from "./Challange5";
import Challange6 from "./Challange6";

function LatestChallenge() {
  return (
    <>
      <Box
        min-width="1024px"
        height="500px"
        bg="rgb(62, 84, 163 )"
        mt="100px"
        mx="50px"
        borderRadius="10px"
      >
        <Center pt="60px" fontSize="30px" as="b" color="white">
          LATEST CHALLENGE
        </Center>
      </Box>
      <Center>
        <Grid
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={10}
          mx="50px"
          position="relative"
          bottom="250px"
        >
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange1 />
          </GridItem>
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange2 />
          </GridItem>
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange3 />
          </GridItem>
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange4 />
          </GridItem>
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange5 />
          </GridItem>
          <GridItem w="400px" h="650px" borderRadius="20px">
            <Challange6 />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}

export default LatestChallenge;
