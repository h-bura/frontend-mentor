import {
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { Difficulty } from "../Utils";
type CardProps = {
  buttonClickSort: boolean;
  setButtonClickSort: React.Dispatch<React.SetStateAction<boolean>>;
  setSortMethod: React.Dispatch<React.SetStateAction<Difficulty>>;
  setButtonClickFilter: React.Dispatch<React.SetStateAction<boolean>>;
};

function SortByMenu({
  buttonClickSort,
  setButtonClickSort,
  setSortMethod,
  setButtonClickFilter,
}: CardProps) {
  return (
    <Flex
      borderLeft="1px solid rgb(219, 229, 230)"
      borderRight="1px solid rgb(219, 229, 230)"
    >
      <Menu>
        <MenuButton
          _active={{ border: "3px dotted rgb(104, 190, 205)" }}
          _hover={{ bgColor: "rgb(240, 244, 244)" }}
          onClick={() => {
            setButtonClickSort(!buttonClickSort);
            setButtonClickFilter(true);
          }}
        >
          <Flex px=" 30px">
            <Text
              display="inline-flex"
              fontSize="13px"
              alignSelf="center"
              fontWeight="bold"
            >
              SORT BY
            </Text>
            <Text
              display="inline-flex"
              fontSize="13px"
              color="grey"
              alignSelf="center"
              ml="10px"
            >
              {buttonClickSort ? <SlArrowDown /> : <SlArrowUp />}
            </Text>
          </Flex>
        </MenuButton>
        <MenuList fontSize="16px" w="285px">
          <MenuItem
            color=" rgb(28, 32, 34)"
            fontWeight="500"
            h="40px"
            onClick={() => setSortMethod("normal")}
          >
            Most Recent
          </MenuItem>
          <Divider />
          <MenuItem
            color=" rgb(28, 32, 34)"
            fontWeight="500"
            h="40px"
            onClick={() => setSortMethod("easy")}
          >
            Difficultly(easier first)
          </MenuItem>
          <Divider />
          <MenuItem
            h="40px"
            color=" rgb(28, 32, 34)"
            fontWeight="500"
            onClick={() => setSortMethod("hard")}
          >
            Difficultly(harder first)
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default SortByMenu;
