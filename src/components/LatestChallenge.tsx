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
        height="500px"
        bg="rgb(62, 84, 163 )"
        mt="100px"
        mx="50px"
        borderRadius="10px"
      >
        <Center pt="60px" fontSize="22px" fontWeight="bold" color="white">
          LATEST CHALLENGE
        </Center>
      </Box>
      <Center>
        <Grid
          width="100%"
          border="1px solid red"
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(2, 1fr)"
          gap={8}
          mx="100px"
          position="relative"
          bottom="330px"
        >
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange1 />
          </GridItem>
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange2 />
          </GridItem>
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange3 />
          </GridItem>
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange4 />
          </GridItem>
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange5 />
          </GridItem>
          <GridItem w="100%" h="700px" borderRadius="20px">
            <Challange6 />
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}

export default LatestChallenge;
