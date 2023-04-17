import { Flex, Divider, useMediaQuery } from "@chakra-ui/react";
import Connections from "./Connections";
import IconsSection from "./IconsSection";
import LinksSection from "./LinksSection";
import StayUpToDate from "./StayUpToDate";

function Footer() {
  const [isLargerThan1070] = useMediaQuery(["(min-width: 1070px)"]);
  return (
    <>
      <IconsSection />
      <Flex
        mx="40px"
        pt="10px"
        mb="67px"
        flexDirection={isLargerThan1070 ? "row" : "column"}
        gap="20px"
      >
        <Flex flex="2">
          <StayUpToDate />
        </Flex>
        <Flex flex="3">
          <Connections />
        </Flex>
      </Flex>
      <Divider />
      <LinksSection />
    </>
  );
}

export default Footer;
