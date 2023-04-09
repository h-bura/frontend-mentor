import {
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { FcInfo } from "react-icons/fc";

function LearnAbout() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        display="inline-flex"
        justifyContent="end"
        fontWeight="600"
        alignItems="center"
        as="button"
        _hover={{ color: "grey" }}
        onClick={onOpen}
      >
        Learn about our challenge types
        <Text ml="10px">
          <FcInfo size="20px" />
        </Text>
      </Text>

      <Modal
        size="xl"
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent pt="8px" pb="45px">
          <ModalHeader fontSize="25px">
            What are the different challenge types?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>
              <Text
                display="inline-flex"
                bgColor="rgb(231, 235, 249)"
                color="rgb(62, 84, 163)"
                fontWeight="bold"
                borderRightRadius="full"
                borderLeftRadius="full"
                p="3px 12px"
                justifyContent="center"
                mb="15px"
                fontSize="17px"
              >
                FREE
              </Text>
              <br />
              Free challenges can be started by anyone. All the starter code
              including the assets and designs in JPG format are free to
              download. <br />
              <br />
              There are Sketch and Figma design files for these challenges but
              they need to be purchased with design credits. Design credits are
              available with a{" "}
              <span
                style={{
                  backgroundColor: "rgb(62, 84, 163)",
                  color: "white",
                  padding: "3px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                PRO
              </span>{" "}
              subscription.
            </Text>
            <br />
            <Divider />

            <br />
            <Text>
              <Text
                display="inline-flex"
                bgColor="rgb(244, 137, 37)"
                color="rgb(255, 255, 255)"
                fontWeight="bold"
                borderRightRadius="full"
                borderLeftRadius="full"
                p="3px 12px"
                justifyContent="center"
                mb="15px"
                fontSize="17px"
              >
                FREE+
              </Text>
              <br />
              Free+ challenges can be started by anyone. All the starter code
              including the assets are free to download. <br /> <br /> The
              Sketch and Figma design files are freely available to download for
              all users. These challenges allow anyone to trial premium
              challenges without subscribing as a{" "}
              <span
                style={{
                  backgroundColor: "rgb(62, 84, 163)",
                  color: "white",
                  padding: "3px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                PRO
              </span>{" "}
              member.
            </Text>
            <br />
            <Divider />
            <br />
            <Text>
              <Text
                display="inline-flex"
                bgColor="rgb(62, 84, 163)"
                color="rgb(255, 255, 255)"
                fontWeight="bold"
                borderRightRadius="full"
                borderLeftRadius="full"
                justifyContent="center"
                mb="15px"
                fontSize="17px"
                p="3px 12px"
              >
                PREMIUM
              </Text>
              <br />
              Premium challenges can only be started by{" "}
              <span
                style={{
                  backgroundColor: "rgb(62, 84, 163)",
                  color: "white",
                  padding: "3px",
                  fontSize: "10px",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
              >
                PRO
              </span>{" "}
              members. The Sketch and Figma design files are included
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LearnAbout;
