import { Flex, Divider, Spacer, useMediaQuery } from "@chakra-ui/react";
import Connections from "./Connections";
import IconsSection from "./IconsSection";
import LinksSection from "./LinksSection";
import StayUpToDate from "./StayUpToDate";

function Footer() {
  const [isLargerThan1030] = useMediaQuery(["(min-width: 1030px)"]);
  return (
    <>
      <IconsSection />
      <Flex
        mx="40px"
        pt="10px"
        mb="67px"
        flexDirection={isLargerThan1030 ? "row" : "column"}
      >
        <StayUpToDate />
        <Spacer />
        <Connections />
      </Flex>
      <Divider />
      <LinksSection />
    </>
  );
}

export default Footer;
