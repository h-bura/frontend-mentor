import { Flex, Divider, Spacer } from "@chakra-ui/react";
import Connections from "./Connections";
import IconsSection from "./IconsSection";
import LinksSection from "./LinksSection";
import StayUpToDate from "./StayUpToDate";

function Footer() {
  return (
    <>
      <IconsSection />
      <Flex mx="40px" pt="10px" mb="67px">
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
