import {
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { RiArrowDropDownLine } from "react-icons/ri";

function NewChallange() {
  return (
    <Flex w="100%" h="80px" borderY="1px solid rgb(219, 229, 230)">
      <Flex
        ml="250px"
        borderLeft="1px solid rgb(219, 229, 230)"
        borderRight="1px solid rgb(219, 229, 230)"
      >
        <Text
          display="flex"
          w="200px"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
          fontWeight="700px"
          h="100%"
        >
          CHALLENGES
        </Text>
      </Flex>
      <Spacer />
      <Flex pr="70px">
        <Flex
          borderLeft="1px solid rgb(219, 229, 230)"
          borderRight="1px solid rgb(219, 229, 230)"
        >
          <Menu>
            <MenuButton fontSize="20px" px=" 30px">
              <Flex>
                <Text display="inline">SORT BY</Text>
                <Text
                  display="inline-block"
                  fontSize="30px"
                  color="grey"
                  p="0px"
                >
                  <RiArrowDropDownLine />
                </Text>
              </Flex>
            </MenuButton>
            <MenuList fontSize="20px">
              <MenuItem>Most Recent</MenuItem>
              <MenuItem>Difficultly(easier first)</MenuItem>
              <MenuItem>Difficultly(hard first)</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        <Flex>
          <Menu>
            <MenuButton
              fontSize="20px"
              px=" 30px"
              borderRight="1px solid rgb(219, 229, 230)"
            >
              <Flex flexDirection="column" alignItems="center">
                <Text display="inline-block">FILTER BY</Text>
                <Text color="grey" display="inline-block" fontSize="30px">
                  <RiArrowDropDownLine />
                </Text>
              </Flex>
            </MenuButton>
            <MenuList fontSize="20px">
              <MenuGroup color="rgb(214, 214, 214)" title="TYPE">
                <MenuItem>Free</MenuItem>
                <MenuItem>Free++ </MenuItem>
                <MenuItem>Premium </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup color="rgb(214, 214, 214)" title="DIFFICULTY">
                <MenuItem>Newbie</MenuItem>
                <MenuItem>Junior</MenuItem>
                <MenuItem>Intermediate</MenuItem>
                <MenuItem>Advanced</MenuItem>
                <MenuItem>Guru</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuGroup color="rgb(214, 214, 214)" title="LANGUAGES">
                <MenuItem>HTML</MenuItem>
                <MenuItem>JS</MenuItem>
                <MenuItem>API</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default NewChallange;
